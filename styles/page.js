import styled from 'styled-components';
import css from 'styled-jsx/css';

export const Section = styled.section`
  padding: 100px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ background }) =>
    background &&
    css`
      background-color: #d4ebc3;
    `}
    ${({ background1 }) =>
    background1 &&
    css`
      background-color: #10193E;
    `}
    ${({ background2 }) =>
    background2 &&
    css`
      background-color: #DFDFDF;
    `}
    ${({ background3 }) =>
    background3 &&
    css`
      background-color: #A5A5A5;
    `}
`;

export const Section_Black = styled.section`
  padding: 0px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Container = styled.div`
  
`;

export const H1 = styled.h1`
  padding: 100px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
