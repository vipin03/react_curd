import React, {Component } from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './component/user-form.component';
import Table from './component/table.component';

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
      players: [],
      loading: false,
      columns :[
        {dataField:'id',text:'Id'},
        {dataField:'name',text:'Name'},
        {dataField:'email',text:'email'}
      ]
    }
    this.getPlayerData();
    }
  
  getPlayerData=async function(){
    try {
      this.setState({
        loading: false
      });
      const data =await axios.get(
        'http://localhost/learn/react_table/table2/api/dummyApi.php?req=getAll'
      );
      this.setState({
        players: data.data,
        loading: true
      });
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return (
      <div className="p-5 App row">
        <div className="col-md-6 col-lg-6 col-sm-12">
        <UserForm players={this.state.players} getPlayerData={this.getPlayerData.bind(this)}/>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          { this.state.loading?<Table columns={this.state.columns} loading={this.state.loading} players={this.state.players}  />:''}
        </div>
      </div>
    );
  }
}
