import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 18px;

  max-width: 90%;
  width: 90%;
  border-radius: 15px;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const Thead = styled.thead`
  border-radius: 15px;
  color: #dddff8;
  font-size: 400;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
`;

export const Th = styled.th`
  padding: 10px 0;
  padding-left: 12px;
  text-align: left;

  :first-child {
    border-top-left-radius: 10px;
  }

  :last-child {
    border-top-right-radius: 18px;
  }
`;

export const Tb = styled.tbody`
  background-color: #e9edff;
`;

export const Td = styled.td`
  padding-left: 16px;
  border-right: 2px solid #e9edff;

  :hover {
    background-color: #e9edff;
    color: #400075;
    font-weight: 700;

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;
