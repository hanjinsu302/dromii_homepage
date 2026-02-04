import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import styles from './3dSamples.module.css';



const bannerImg =[
  "/images/hdsafetymapbanner.png",
  ]
const hdsafetyplatformimg = [
    "/images/hdsafety_plateform.png",
    "/images/hdsafety_plateform2.png",
    "/images/skillbanner.png",
    "/images/processingbanner.png",
    
]
  
const Hdsafety = () => {
const { t } = useTranslation('platform');








return(
<Container>
  <MainBanner>
  </MainBanner>
  <Section>
    <Box>
      <img src={bannerImg[0]} style={{width:'100%'}} />
    </Box>
    <div className={styles.SamplesHD}>
      <PortfolioTab t={t} />
    </div>
  </Section>
  <ImgSection style={{marginBottom:"3.5vw"}}>
    <img src={hdsafetyplatformimg[2]}style={{width:'90%'}}/>
    <Title>{t('section4.subtitle')}</Title>
    <Description>{t('section4.description1')}</Description>
  </ImgSection>
  
  <ImgSection >
    <img src={hdsafetyplatformimg[0]}style={{width:'90%'}}/>
  </ImgSection>
  <ImgSection >
    <img src={hdsafetyplatformimg[1]}style={{width:'68%'}}/>
  </ImgSection>
</Container>
)}

export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale, ['platform', 'header'])),
// Will be passed to the page component as props
},
};
}

export default Hdsafety;
    const Container = styled.div`
    `;

    const MainBanner = styled.div`
        width:100%;
        height: 4vw;
    `;

    const Section =styled.div`
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
    const ImgSection = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 4vw;
  `;

    const Title = styled.div`
       position: absolute;
       font-size: 2.5vw;
       font-weight: 800;
       margin-top: 4%;
       left:22vw;
    `;
    const Description = styled.div`
       position: absolute;
       width: 65vw;
       display: flex;
       font-size: 1.3vw;
       font-weight: 500;
       line-height: 2vw;
       margin-top: 15%;
       margin-left: 11%;
    `;

  