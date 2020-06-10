import React, { useEffect } from 'react';
import { TR } from './styled/TR';
import { TD } from './styled/TD';
import { v4 as uuidv4 } from 'uuid';

interface Row {
  countColumns: number;
  row: Array<number | string | null>
};

function Row(props: Row) {
  const sumRow = () => {
    const sumtotal = props.row.reduce((sum: number, val: any, index: number) => {
      if (!isNaN(val) && index < props.countColumns) {
        return sum + val;
      }
      return sum;
    }, 0);
    return sumtotal.toFixed(2);
  };

  const fillEmpty = () => {    
    if (props.row.length < props.countColumns) {      
      const fillArray: Array<null> = [];
      for (let i = 0; i < (props.countColumns - props.row.length); i++) {
        fillArray.push(null);
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

  const arr : Array<null> = fillEmpty()!;  

  return (
    <TR>
      {props.row.map((row: string | number | null, index: number) =>
        index < props.countColumns ? (
          <TD key={uuidv4()} lastColumn={false}>
            {row}
          </TD>
        ) : null
      )}    
      {arr ? arr.map((item:null) => <TD key={uuidv4()} lastColumn={false}>{item}</TD>) : null}
      <TD key={uuidv4()} lastColumn={true}>
        {sumRow()}
      </TD>
    </TR>
  );
}

export default Row;
