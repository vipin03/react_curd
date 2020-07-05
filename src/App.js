import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import UserForm from './component/user-form.component';
import Table from './component/table.component';
import * as reactBootstrap from 'react-bootstrap';

function App() {
  const [players,setPlayers]=useState([]);
  const [loading,setLoading]=useState(false);
  const getPlayerData=async function(){
    try {
      const data =await axios.get(
        'http://localhost/learn/react_table/table2/api/dummyApi.php?req=getAll'
      );
      setPlayers(data.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  const columns =[
    {dataField:'id',text:'Id'},
    {dataField:'name',text:'Name'},
    {dataField:'email',text:'email'}
  ];
  useEffect(function(){
    getPlayerData();
  },[]);
  return (
    
    <div className="p-5 App row">
      <div className="col-md-6 col-lg-6 col-sm-12">
        <UserForm />
      </div>
      <div className="col-md-6 col-lg-6 col-sm-12">
        { loading?<Table columns={columns} loading={loading} players={players}/>:''}
      </div>
    </div>
  );
}

export default App;
