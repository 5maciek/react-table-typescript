import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

function Row(props: any) {
  const TR = styled.tr`
    &:nth-child(even) {
      background-color: #e0d4bb;
    }
  `;

  const TD = styled.td<{ lastColumn: boolean }>`
    background-color: ${(props) => (props.lastColumn ? '#CAB388;' : '')}
    position: ${(props) => (props.lastColumn ? 'sticky;' : 'inherit;')}
    right: ${(props) => (props.lastColumn ? '0;' : 'auto;')}
    text-align: center;
    padding: 10px;

  `;

  const sumRow = () => {
    const sumtotal = props.row.reduce((sum: any, val: any) => {
      if (!isNaN(val)) {
        return sum + val;
      }
      return sum;
    }, 0);

    return sumtotal;
  };

  return (
    <TR>
      {props.row.map((item: any) => (
        <TD key={uuidv4()} lastColumn={false}>
          {item}
        </TD>
      ))}
      <TD key={uuidv4()} lastColumn={true}>
        {sumRow()}
      </TD>
    </TR>
  );
}

export default Row;
