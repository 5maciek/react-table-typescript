import React from 'react';
import Column from './Column';
import Row from './Row';
import { StyledTable } from './styled/StyledTable';
import { TR } from './styled/TR';
import { v4 as uuidv4 } from 'uuid';
import 'font-awesome/css/font-awesome.min.css';

interface State {
  columns: ColumnData[];
  data: RowData[];
}

interface ColumnData {
  id: string;
  title: string;
  width: number;
  sorted: string | null;
}

interface RowData {
  id: string;
  row: Array<number | string | null>;
}

class Table extends React.Component<{}, State> {
  state: State = {
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
      {
        id: uuidv4(),
        row: [
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur mollitia magnam inventore. Pariatur, optio distinctio. Aliquam architecto dolore voluptate nostrum quis dolores! Voluptatum ipsam illo repellat est quaerat iure.`,
          2,
          1,
          98.02,
          'nohow',
          'mno',
          Math.floor(Math.random() * 100),
        ],
      },
      {
        id: uuidv4(),
        row: [
          'value 3',
          1,
          33,
          11.12,
          'something',
          'abc',
          Math.floor(Math.random() * 100),
        ],
      },
      {
        id: uuidv4(),
        row: [
          'value 2',
          3,
          74,
          34.87,
          'anything',
          'def',
          Math.floor(Math.random() * 100),
        ],
      },
      {
        id: uuidv4(),
        row: [
          'value 1',
          9,
          2,
          71.12,
          'everything',
          'xyz',
          Math.floor(Math.random() * 100),
        ],
      },
      {
        id: uuidv4(),
        row: [
          'value 0',
          5,
          1,
          1.18,
          'somehow',
          'pol',
          Math.floor(Math.random() * 100),
        ],
      },
      {
        id: uuidv4(),
        row: [
          'value 5',
          3,
          29,
          147.54,
          'nothing',
          'trc',
          Math.floor(Math.random() * 100),
        ],
      },
    ],
  };

  handleSortColumn = (index: number | undefined) => {
    const rows = this.state.data;
    const columns = this.state.columns;
    if (index !== undefined) {
      let sort = columns[index].sorted;
      let sortedIcons: Array<string | null> = [];
      let sortedRows: RowData[] = [];
      if (sort === null || sort === 'desc') {
        sortedRows = rows.sort(function (a: any, b: any) {
          if (a.row[index] < b.row[index]) {
            return -1;
          }
          if (a.row[index] > b.row[index]) {
            return 1;
          }
          return 0;
        });

        sortedIcons = columns.map((column: ColumnData, i: number) => {
          if (i === index) return 'asc';
          else return null;
        });
      } else {
        sortedRows = rows.sort(function (a: any, b: any) {
          if (a.row[index] < b.row[index]) {
            return 1;
          }
          if (a.row[index] > b.row[index]) {
            return -1;
          }
          return 0;
        });

        sortedIcons = columns.map((column: ColumnData, i: number) => {
          if (i === index) return 'desc';
          else return null;
        });
      }

      const newColumns = this.state.columns.map(
        (column: ColumnData, i: number) => {
          return {
            id: column.id,
            title: column.title,
            width: column.width,
            sorted: sortedIcons[i],
          };
        }
      );

      this.setState({
        columns: newColumns,
        data: sortedRows,
      });
    }
  };

  render() {
    const columns = this.state.columns;
    const rows = this.state.data;
    return (
      <StyledTable>
        <thead>
          <TR>
            {columns.map((column: ColumnData, index: number) => (
              <Column
                key={column.id}
                index={index}
                title={column.title}
                width={column.width}
                handleClick={this.handleSortColumn}
                sorted={column.sorted}
              />
            ))}
            <Column
              key={uuidv4()}
              lastColumn={true}
              handleClick={this.handleSortColumn}
              sorted={null}
            />
          </TR>
        </thead>
        <tbody>
          {rows.map((row: RowData) => (
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
