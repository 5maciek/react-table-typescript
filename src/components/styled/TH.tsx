import styled from 'styled-components';

const padding = '8px;';

export const TH = styled.th<{ widthColumn: number; lastColumn: boolean }>`    
    width: ${(props) =>
      props.widthColumn ? props.widthColumn + 'px;' : '100px;'}
    background-color: ${(props) => (props.lastColumn ? '#57A0D3;' : '#89CFF0;')}
    position: ${(props) => (props.lastColumn ? 'sticky;' : 'inherit;')}
    right: ${(props) => (props.lastColumn ? '0;' : 'auto;')}
    padding: ${padding}    
    font-weight: bold;
    cursor: pointer;
`;
