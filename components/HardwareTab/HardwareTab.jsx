import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HardwareTab = ({ t }) => {
  const router = useRouter();

  return (
    <Container>
      <ul>
        <Tab active={router.pathname.includes('sales')}>
          <Link href='sales'>{t('sales.name')} (3)</Link>
        </Tab>
        <Tab active={router.pathname.includes('operational')}>
          <Link href='operational'>{t('operational.name')} (6)</Link>
        </Tab>
        <Tab active={router.pathname.includes('sensors')}>
          <Link href='sensors'>{t('sensors.name')} (9)</Link>
        </Tab>
      </ul>
    </Container>
  );
};

export default HardwareTab;

const Container = styled.nav`
  width: fit-content;
  margin: auto;
  font-size: 14px;
  ul {
    display: flex;
    gap: 20px;
  }
`;

const Tab = styled.li`
  width: 200px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  margin-bottom: 150px;

  ${({ active }) =>
    active &&
    css`
      background-color: #00a9e8;
      color: white;
    `};
`;
