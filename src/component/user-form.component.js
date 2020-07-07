import React, { Component } from "react";
import axios from 'axios';
export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    onSubmitt = e => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('email', this.state.email);
        var self = this;
        axios({
            method: 'post',
            withCredentials: false,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
            url: 'http://localhost/learn/react_table/table2/api/dummyApi.php',
            data: bodyFormData
          }).then(function (response) {
            if(response.data.stat){
                document.getElementById("form").reset();
                self.props.getPlayerData();
            }
          });
    };
    
    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <form id='form' onSubmit={this.onSubmitt} noValidate>
            <div className="form-group">
                <label>Name</label>
                <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.formValChange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.formValChange}
                />
            </div>
            <button type="submit" className="btn btn-block btn-danger">Enter Details</button>
            </form>
        );
    }
}