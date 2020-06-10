import React from 'react';
import Column from './Column';
import Row from './Row';
import { StyledTable } from './styled/StyledTable';
import { TR } from './styled/TR';
import { v4 as uuidv4 } from 'uuid';
import 'font-awesome/css/font-awesome.min.css';

class Table extends React.Component {
  state = {
    columns: [
      { id: uuidv4(), title: 'Header content 1', width: 350, sorted: null },
      { id: uuidv4(), title: 'Header content 2', width: 200, sorted: null },
      { id: uuidv4(), title: 'Header content 3', width: 200, sorted: null },
      { id: uuidv4(), title: 'Header content 4', width: 300, sorted: null },
      { id: uuidv4(), title: 'Header content 5', width: 400, sorted: null },
      { id: uuidv4(), title: 'Header content 5', width: 300, sorted: null },
      { id: uuidv4(), title: 'Header content 6', width: 200, sorted: null },
    ],
    data: [
      { id: uuidv4(), row: [`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur mollitia magnam inventore. Pariatur, optio distinctio. Aliquam architecto dolore voluptate nostrum quis dolores! Voluptatum ipsam illo repellat est quaerat iure.`, 2, 1, 98.02, 'nohow', 'mno', Math.floor(Math.random()*100)] },
      { id: uuidv4(), row: ['value 3', 1, 33, 11.12, 'something', 'abc', Math.floor(Math.random()*100)] },
      { id: uuidv4(), row: ['value 2', 3, 74, 34.87, 'anything', 'def', Math.floor(Math.random()*100)] },
      { id: uuidv4(), row: ['value 1', 9, 2, 71.12, 'everything', 'xyz', Math.floor(Math.random()*100)] },
      { id: uuidv4(), row: ['value 0', 5, 1, 1.18, 'somehow', 'pol', Math.floor(Math.random()*100)] },
      { id: uuidv4(), row: ['value 5', 3, 29, 147.54, 'nothing', 'trc', Math.floor(Math.random()*100)] },
    ],
  };

  handleSortColumn = (index: any) => {
    const rows = this.state.data;
    const sortedValues = rows.sort(function (a, b) {      
      if (a.row[index] < b.row[index]) {        
        return -1;
      }
      if (a.row[index] > b.row[index]) {        
        return 1;
      }      
      return 0;
    });
    this.setState({
      data: sortedValues,
    });
  };

  render() {
    const columns = this.state.columns;
    const rows = this.state.data;
    return (
      <StyledTable>
        <thead>
          <TR>
            {columns.map((column, index) => (
              <Column
                key={column.id}
                index={index}
                title={column.title}
                color={'blue'}
                width={column.width}
                handleClick={this.handleSortColumn}
              />
            ))}
            <Column
              key={uuidv4()}
              lastColumn={true}
              title={'Total'}
              handleClick={this.handleSortColumn}
            />
          </TR>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row
              key={row.id}
              row={row.row}
              countColumns={this.state.columns.length}
            />
          ))}
        </tbody>
      </StyledTable>
    );
  }
}

export default Table;
