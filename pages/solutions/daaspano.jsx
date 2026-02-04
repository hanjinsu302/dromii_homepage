import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
  import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  import React from 'react';
  import styled from 'styled-components';
  import { useTranslation } from 'next-i18next';
   import styles from './daaspano.module.css';
  //import styles from './cfsm.module.css';


  const DaasPano = () => {
  const { t } = useTranslation('solution');
  const DaasMain =[
  "/images/daasbanner.png",
  "/images/Worldcup.png"
  ]


  return(
    <Container>
  <MainBanner>
    {/* <img src={samplesMain[0]} style={{width:'100%'}} /> */}
  </MainBanner>
  <Section>
    <Box>
       <img src={DaasMain[0]} style={{width:'100%'}} />
    </Box>
    <div className={styles.DaasDS}>
    </div>
    <div className={styles.DaasHD}>
      {/* <PortfolioTab t={t} /> */}
    </div>
  </Section>
  <Section>
    <div className={styles.DaasPanoContainer}>
            <div className={styles.DaasPanoBox}>
              <H1>{t('daas.section1.title')}</H1>
              <br />
              <H2>{t('daas.section1.description')}</H2>
              <div className={styles.DaasPanoLinkBox}>
                <a className={styles.Link}  target='_blank' href={"http://worldcup.4smapper.com/"}  legacyBehavior>{t('daas.section2.description')}</a>
                <a className={styles.Link}  target='_blank' href={"http://worldcuppark.4smapper.com/"}  legacyBehavior>{t('daas.section2.description2')}</a>
                <a className={styles.Link}  target='_blank' href={"http://yeongwol.dromii.com/"}  legacyBehavior>{t('daas.section2.description3')}</a>
              </div>
            </div>
            <div className={styles.DaasPanoBox}>
              {t('daas.section3.description')}
            </div>
          </div>
  </Section>
 

  
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

  export default DaasPano;


  const MainBanner = styled.div`
    width:100%;
    height: 4vw;
  `;
  const Container = styled.div`  
  `;
  const Box = styled.div`
  grid-area: 1 / 1 / 8 / 12;
  margin-top:0 !important;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const Section =styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;



  const H1 = styled.h1`
    font-size:2.5vw;
    font-weight: 700;

  `;

  const H2 = styled.h2`
    font-size:2vw;
    line-height: 2.5vw;
  `;



