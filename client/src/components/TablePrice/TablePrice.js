import React, { Component } from 'react';
import { Table } from './TablePrice.style.js';
class TablePrice extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
          <th></th>
          <th>head2</th>
          <th>head3</th>
          <th>head4</th>
          <th>head5</th>

          </tr>
        </thead>
        <tbody>
          <tr>
          <td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td><td>cell5_1</td></tr>
          <tr>
          <td>cell1_2</td><td>cell2_2</td><td>cell3_2</td><td>cell4_2</td><td>cell5_2</td></tr>
          <tr>
          <td>cell1_3</td><td>cell2_3</td><td>cell3_3</td><td>cell4_3</td><td>cell5_3</td></tr>
          <tr>
          <td>cell1_4</td><td>cell2_4</td><td>cell3_4</td><td>cell4_4</td><td>cell5_4</td></tr>
          <tr>
          <td>cell1_5</td><td>cell2_5</td><td>cell3_5</td><td>cell4_5</td><td>cell5_5</td></tr>
          <tr>
          <td>cell1_6</td><td>cell2_6</td><td>cell3_6</td><td>cell4_6</td><td>cell5_6</td></tr>
          <tr>
          <td>cell1_7</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell5_7</td></tr>
        </tbody>
      </Table>
    );
  }
}

export default TablePrice;