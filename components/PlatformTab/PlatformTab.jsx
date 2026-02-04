import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PlatformTab = ({ t }) => {
  const router = useRouter();

  return (
    <Container>
      <ul>
      <Tab active={router.pathname.includes('solutions')} onClick={() => onTabClick()}>
          <a>DaaS</a>
        </Tab>
        <Tab active={router.pathname.includes('daaspano')}>
          <Link href='daaspano'>DTM</Link>
        </Tab>
        <Tab active={router.pathname.includes('cfsm')}>
          <Link href='cfsm'>CfSM</Link>
        </Tab>
        <Tab active={router.pathname.includes('cfsm')}>
          <Link href='cfsm'>AfGG</Link>
        </Tab>
        
       
        
      </ul>
    </Container>
  );
};

export default PlatformTab;

const Container = styled.nav`
  width: 100%;
  margin: auto;
  font-size: 1.2vw;
  ul {
    display: flex;
    
  }
`;

const Tab = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color:#8a8a87a5;
   color: white;
   width: 25vw;
   text-align: center;
   height: 3.2vw;


  ${({ active }) =>
    active &&
    css`
      background-color: rgba(45, 50, 74, 1);
      color: white;
    `};
`;
