import React from 'react';
import styled from 'styled-components';

const padding = '8px;';

function Column(props: any) {
  const TH = styled.th<{ widthColumn: number; lastColumn: boolean }>`    
    width: ${(props) =>
      props.widthColumn ? props.widthColumn + 'px;' : '100px;'}
    background-color: ${(props) => (props.lastColumn ? '#CAB388;' : '#D5C4A1;')}
    position: ${(props) => (props.lastColumn ? 'sticky;' : 'inherit;')}
    right: ${(props) => (props.lastColumn ? '0;' : 'auto;')}
    padding: ${padding}    
    font-weight: bold;
    cursor: pointer;
  `;

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
