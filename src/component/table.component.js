import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
export default class Table extends Component {
    render() {
        return (
            <div>
                <input type='hidden' id='check' value='aaaa' />
                <BootstrapTable
                keyField="id"
                data={this.props.players}
                columns={this.props.columns}
                pagination={paginationFactory()}
              />
              </div>
          );
    }
}