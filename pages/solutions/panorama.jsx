import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './3dSamples.module.css';
import { useState } from 'react';


const samplesMain =[
  "/images/panoramabanner.png",
  "/images/panoramabanner2.png",
  "/images/sampleback2.png"
  ]
  
const Samples = () => {
const { t } = useTranslation('solution');


const [selectedScreen, setSelectedScreen] = useState(1);

const showScreen = (screenNumber) => {
setSelectedScreen(screenNumber);
};

  function panorama1() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sko!2skr!4v1489039520439!6m8!1m7!1sF%3A-pjM4yMwFUJI%2FWMDwOESgQvI%2FAAAAAAABLuA%2F3SOYFbdyJLsu1BRcAVIZ419CVVyDs5q8QCLIB!2m2!1d37.345478!2d126.953312!3f0!4f0!5f0.7820865974627469"
            width="1000" height="450" frameBorder="5" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama2() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1529914334598!6m8!1m7!1sCAoSLEFGMVFpcE82a3V5TmRLbE9pRVdUNjNTa24zQkZZYUhtbXJIcjZIZzFJcnRv!2m2!1d37.1047421!2d127.2638929!3f359.9045094811565!4f-48.1592148257341!5f0.7820865974627469"
            width="1000" height="450" frameBorder="0" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama3() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1594780717934!6m8!1m7!1sCAoSLEFGMVFpcE1paDV4elBiYVFRS05ndkQ2SHpkZ3gtR2t3M1NjV1pJM0xHRFZK!2m2!1d35.1752217!2d129.0724753!3f264.55817205205!4f17.675962450365304!5f0.7820865974627469"
            width="1000" height="450" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama4() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1594780976422!6m8!1m7!1sCAoSLEFGMVFpcE5LZ3EzemZmczA1bEE2cDdRSjVfeGx2TUFLR1pFdkdZbkhXOWxY!2m2!1d37.3866049!2d-121.9832137!3f103.43214183323047!4f9.653429416797735!5f0.7820865974627469"
            width="1000" height="450" frameBorder="0" style={{border:5}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    );
  }




return(
<Container>
  <MainBanner>
    {/* <img src={samplesMain[0]} style={{width:'100%'}} /> */}
  </MainBanner>
  <Section>
    <Box>
      <img src={samplesMain[1]} style={{width:'100%'}} />
    </Box>
    <div className={styles.SamplesDS}>
      {t('panorama.section1.description')}
    </div>
    <div className={styles.SamplesHD}>
      <PortfolioTab t={t} />
    </div>
  </Section>
  <Panorama background1>
        <Grid>
          <PANORAMA>
            <div>
              {panorama2()}
            </div>
            <div>
              {panorama3()}
            </div>   
          </PANORAMA>
        </Grid>
      </Panorama>
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

export default Samples;


 
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

  // const Link = styled.div`
  // `;
  const Platform = styled.div`
    width: 100%;
  `;
  const Button =styled.div`
    width: 10vw;
    border-radius: 3vw;
    font-size: 3vw;
    margin: 0 1.5vw 0 1.5vw;
  `;

  const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 18vw;
    border: 1px solid rgb(227, 226, 226);
    border-radius: 1vw;
    margin: 1vw;
  `;

  const Grid = styled.div`
    margin-top: 1vw;
    display: flex;

    div {
      width: 25%;
    }

    img {
      margin-bottom: 3vw;
    }
  `;

  const PANORAMA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    div {
      width: 100%;
    }
  `;

  const Panorama = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vw;
  `;