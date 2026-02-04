import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
//  import { Container} from '@/styles/page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import styles from './solutions.module.css';


const Solutions = () => {

const { t } = useTranslation('solution');


  const solutionsMain =[
    "/images/solutionbanner.png",
    "/images/soultionsbanner2.png"
  ]

  



  return (
  <Container>
  <MainBanner>
    {/* <img src={samplesMain[0]} style={{width:'100%'}} /> */}
  </MainBanner>

  <Section>
    <Box>
    <img src={solutionsMain[0]} style={{width:'100%'}} />
    </Box>
    <div className={styles.SamplesDS}>
    </div>
    <div className={styles.SamplesHD}>
      <PortfolioTab t={t} />
    </div>
  </Section>
  <BoxSection>
    <div className={styles.SoluctionsBox1}>
      <H1 className={styles.section1_h1}>{t('section1.section1.title')}</H1>
      <Description className={styles.section1_DS}>{t('section1.section1.description')}</Description>
      <Link legacyBehavior href='/solutions/cfsm'>
             More 〉
      </Link>
    </div>
    <div className={styles.SoluctionsBox2}>
      <H1 className={styles.section1_h1}>
        {t('section1.section2.title')}
      </H1>
      <Description className={styles.section1_DS}>
        {t('section1.section2.description')}
      </Description>
      <Link legacyBehavior href='/solutions/3dSamples'>
            More 〉
      </Link>

    </div>
    <div className={styles.SoluctionsBox3}>
      <H1 className={styles.section1_h1}>
        {t('section1.section3.title')}
      </H1>
      <Description className={styles.section1_DS}>
        {t('section1.section3.description')}
      </Description>
      <Link legacyBehavior href='/solutions/hdsafety'>
            More 〉
      </Link>

    </div>
    <div className={styles.SoluctionsBox4}>
      <H1 className={styles.section1_h1}>
        {t('section1.section4.title')}
      </H1>
      <Description className={styles.section1_DS}>
        {t('section1.section4.description')}
      </Description>
      <Link legacyBehavior href='/solutions/automatic'>
            More 〉
      </Link>
    </div>
  </BoxSection>


</Container>
  )}

  export async function getStaticProps({ locale }) {
  return {
  props: {
  ...(await serverSideTranslations(locale, ['solution', 'header'])),
  // Will be passed to the page component as props
  },
  };
  }

  export default Solutions;

  const H1 = styled.h1`
    font-size:2vw;
    color: white;
    font-weight: 800;
    text-align: center;
    font-family: 'Roboto',sans-serif !important;
  `;


  const MainBanner = styled.div`
    width:100%;
    height: 4vw;
  `;
  const Container = styled.div`
  `;
  const Section =styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 1fr);
    
  `;
  const BoxSection =styled.div`
    margin-top:6.4vw;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  `;
  const Box = styled.div`
    grid-area: 1 / 1 / 8 / 12;
    margin-top:0 !important;
    display:flex;
    justify-content: center;
    align-items: center;
  `;


 

  const Description = styled.p`
    margin-top: 3vw;
  `;