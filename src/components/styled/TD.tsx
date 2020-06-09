import styled from 'styled-components';

export const TD = styled.td<{ lastColumn: boolean }>`
    background-color: ${(props) => (props.lastColumn ? '#57A0D3;' : '')}
    position: ${(props) => (props.lastColumn ? 'sticky;' : 'inherit;')}
    right: ${(props) => (props.lastColumn ? '0;' : 'auto;')}
    text-align: center;
    padding: 10px;
`;
