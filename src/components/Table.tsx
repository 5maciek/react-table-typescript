import React from 'react';
import ColumnTitle from './ColumnTitle';
import Row from './Row';
import { v4 as uuidv4 } from 'uuid';

class Table extends React.Component {
  state = {
    columns: [
      { id: uuidv4(), title: 'Header content 1', width: 150 },
      { id: uuidv4(), title: 'Header content 2', width: 300 },
      { id: uuidv4(), title: 'Header content 3', width: 200 },
    ],
    data: [
      { id: uuidv4(), row: ['value 1', 2, 5] },
      { id: uuidv4(), row: ['value 3', 1, 33] },
      { id: uuidv4(), row: ['value 2', 3, 2] },
    ],
  };

  handleSortColumn = (index: any) => {
    //console.log(index);
    const rows = this.state.data;
    const sortedValue = rows.sort(function (a, b) {
      if (a.row[index] < b.row[index]) {
        return -1;
      }
      if (a.row[index] > b.row[index]) {
        return 1;
      }
      return 0;
    });

    const sorting = rows.sort();

    //const sortedValue = rows.sort((a:Maciek ,b:Maciek) => `${a.row[index].toString()}` as any - (`${b.row[index].toString()}` as any));

    this.setState({
      data: sorting,
    });
  };

  render() {
    const columns = this.state.columns;
    const rows = this.state.data;
    return (
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <ColumnTitle
                key={column.id}
                index={index}
                title={column.title}
                color={'blue'}
                width={column.width}
                handleClick={this.handleSortColumn}
              />
            ))}
            <ColumnTitle
              key={uuidv4()}
              lastColumn={true}
              title={'maciek'}
              handleClick={this.handleSortColumn}
            />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row key={row.id} row={row.row} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
