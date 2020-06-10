import React from 'react';
import { TH } from './styled/TH';
import 'font-awesome/css/font-awesome.min.css'; 

function Column(props: any) {
  return (
    <TH
      widthColumn={props.width}
      lastColumn={props.lastColumn}
      onClick={() => props.handleClick(props.index)}
    >
      {props.title || 'Total'}
      {props.sorted === "asc" ? <i className="fa fa-sort-up"></i> : props.sorted === "desc" ? <i className="fa fa-sort-down"></i> : null}      
    </TH>
  );
}

export default Column;
