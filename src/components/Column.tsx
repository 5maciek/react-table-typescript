import React from 'react';
import { TH } from './styled/TH';

function Column(props: any) {
  return (
    <TH
      widthColumn={props.width}
      lastColumn={props.lastColumn}
      onClick={() => props.handleClick(props.index)}
    >
      {props.title || 'Total'}
    </TH>
  );
}

export default Column;
