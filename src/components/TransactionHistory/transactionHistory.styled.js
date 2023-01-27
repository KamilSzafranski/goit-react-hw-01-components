import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 500px;
  text-align: center;
`;
export const TableHead = styled.thead`
  background-color: lightseagreen;
  text-transform: uppercase;
  font-size: 16px;
  color: white;
`;

export const TableHeadRow = styled.tr`
  height: 50px;
`;

export const TableRow = styled.tr`
  height: 30px;
  font-size: 16px;
  background-color: ${props =>
    props.index % 2 === 0 ? 'white' : 'rgb(199, 200, 206);'};
`;
