import React, { useEffect } from 'react';
import { TR } from './styled/TR';
import { TD } from './styled/TD';
import { v4 as uuidv4 } from 'uuid';

function Row(props: any) {
  const sumRow = () => {
    const sumtotal = props.row.reduce((sum: any, val: any, index: any) => {
      if (!isNaN(val) && index < props.countColumns) {
        return sum + val;
      }
      return sum;
    }, 0);
    return sumtotal;
  };

  const fillEmpty = () => {
    if (props.row.length < props.countColumns) {
      const fillArray: any = [];
      for (let i = 0; i < props.row.length - props.countColumns; i++) {
        fillArray.push('111');
      }
      return fillArray;
    }
  };

  useEffect(() => {
    if (props.row.length > props.countColumns) {
      console.log(
        'Some data rows are not displayed because is mismatch with columns.'
      );
    }
  });
  const arr: any = fillEmpty();
  return (
    <TR>
      {props.row.map((item: any, index: any) =>
        index < props.countColumns ? (
          <TD key={uuidv4()} lastColumn={false}>
            {item}
          </TD>
        ) : null
      )}
      {arr.map((item: any) => (
        <td>item</td>
      ))}
      <TD key={uuidv4()} lastColumn={true}>
        {sumRow()}
      </TD>
    </TR>
  );
}

export default Row;
