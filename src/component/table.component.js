import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.loading=this.props.loading;
        this.players=this.props.players;
        this.columns=this.props.columns;
    }
    render() {
        return (
            <div>
                <input type='hidden' id='check' value='aaaa' />
            {this.loading?(<BootstrapTable
                keyField="id"
                data={this.players}
                columns={this.columns}
                pagination={paginationFactory()}
              />):'Loading....'}
              </div>
          );
    }
}