import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PortfolioTab = ({ t }) => {
  const router = useRouter();

  return (
    <Container>
      <ul>
        <Tab active={router.pathname.includes('cfsm')}>
          <Link href='cfsm'>CfSM</Link>
        </Tab>
        <Tab active={router.pathname.includes('3dSamples')}>
          <Link href='3dSamples'>3D MODELING</Link>
        </Tab>
        <Tab active={router.pathname.includes('hdsafety')}>
          <Link href='hdsafety'>HD SAFETY MAP</Link>
        </Tab>    
        <Tab active={router.pathname.includes('automatic')}>
          <Link href='automatic'>AUTOMATIC DATA PROCESSING</Link>
        </Tab>
        <Tab active={router.pathname.includes('04')}>
        <a target='http://sample.dromii.com/index.html' href='http://sample.dromii.com/index.html'>
                      PROCESSING RESULTS
                      </a>
        </Tab>
      </ul>
    </Container>
  );
};

export default PortfolioTab;

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
   width: 20vw;
   text-align: center;
   height: 3.2vw;


  ${({ active }) =>
    active &&
    css`
      background-color: rgba(45, 50, 74, 1);
      color: white;
    `};
`;
