import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import styles from './3dSamples.module.css';



const samplesMain =[
  "/images/automaticbanner.png",
  ]

const automaticplatformimg = [
    "/images/automatice_platfrom.png",
    "/images/processingbanner.png",
    "/images/logo_edit_short_ver.gif",


]
  
const Automatic = () => {
    const { t } = useTranslation('solution');


return(
<Container>
  <MainBanner>
    
  </MainBanner>
  <Section>
    <Box>
      <img src={samplesMain[0]} style={{width:'100%'}} />
    </Box>
    <div className={styles.SamplesDS}>
     
    </div>
    <div className={styles.SamplesHD}>
      <PortfolioTab t={t} />
    </div>
  </Section>
  <ImgSection style={{marginBottom:'2vw', marginTop:'1.3vw'}}>
    <img src={automaticplatformimg[1]}style={{width:'90%'}}/>
  </ImgSection>
   
  <ImgSection >
    <img src={automaticplatformimg[2]}style={{width:'60%'}}/>
  </ImgSection>
  
  <ImgSection >
    <img src={automaticplatformimg[0]}style={{width:'90%'}}/>
  </ImgSection>
 
  
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

export default Automatic;


 
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
        margin-bottom: 8vw;
  `;