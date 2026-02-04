import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './cfsm.module.css';
import { useState, useRef, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

  const BlockImg = [
    "/images/Block/all_block.png",
    "/images/Block/car_block.png",
    "/images/Block/car_block2.png",
    "/images/Block/car_block3.png",
    "/images/Block/car_block4.png",
  ]
  const SondoImg =[
    "/images/CfSM/songdo_2d_cafree.png",
    "/images/CfSM/songdo_2d_non_carfree.png",
    "/images/CfSM/songdo_3d_carfree.png",
    "/images/CfSM/songdo_3d_non_carfree.png",
    "/images/CfSM/songdo_ver_2d_non_carfree.png",
    "/images/CfSM/songdo_ver2_3d.png",
    "/images/CfSM/songdo_car_accident_2d.png",
    "/images/CfSM/songdo_car_accident_3d.png",
  ]
  const samplesMain =[
    "/images/cfsmbanner.png",
    "/images/cfsmbanner2.png",
    "/images/sampleback2.png"
  ]

  const ScreenOne = () => (
  <div>
    <div className={styles.SamplesContainer}>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/ortho.html'}>
          <img src={SondoImg[0]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/ortho.html'}>
          SONGDO  |  without car Ortho</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          <img src={SondoImg[1]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
        SONGDO  |  with car Ortho</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
          <img src={SondoImg[2]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
        SONGDO | with car 3D</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/3d.html'}>
          <img src={SondoImg[3]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/3d.html'}>
          SONGDO  |  without car 3D</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
          <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          <img src={SondoImg[4]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          SONGDO  |  with car Ortho</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/3d.html'}>
          <img src={SondoImg[5]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/3d.html'}>
          SONGDO  |  with car 3D</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/ortho.html'}>
          <img src={SondoImg[6]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/ortho.html'}>
          SONGDO  |  Car Accident Ortho</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/3d.html'}>
          <img src={SondoImg[7]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/3d.html'}>
          SONGDO  |  car_accident_3d</a>
      </Item> 
    </div>
  </div>
  );
  const ScreenTwo = () => (
  <div>
    <div className={styles.SamplesContainer}>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          <img src={SondoImg[1]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          SONGDO  |  with car Ortho</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          <img src={SondoImg[4]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/ortho.html'}>
          SONGDO  |  with car Ortho</a>
      </Item>
    </div>
  </div>
  );
  const ScreenThree = () => (
  <div>
    <div className={styles.SamplesContainer}>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/ortho.html'}>
          <img src={SondoImg[0]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2363/ortho.html" target={'http://sample.dromii.com/sample/songdo/dromii2363/ortho.html'}>
          SONGDO  |  without car Ortho</a>
      </Item>
    </div>

  </div>
  );
  const ScreenFour = () => (
  <div>
    <div className={styles.SamplesContainer}>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
          <img src={SondoImg[2]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
          SONGDO  |  with car 3D</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/3d.html'}>
          <img src={SondoImg[5]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2323/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2323/3d.html'}>
        SONGDO  |  with car 3D</a>
      </Item>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/3d.html'}>
          <img src={SondoImg[7]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2086/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2086/3d.html'}>
          SONGDO  |  car_accident_3d</a>
      </Item>
    </div>

  </div>
  );
  const ScreenFive = () => (
  <div>
    <div className={styles.SamplesContainer}>
      <Item>
        <div className={styles.SamplesItemImg}>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
          <img src={SondoImg[2]} style={{width:'100%'}} />
          </a>
        </div>
        <a href="http://sample.dromii.com/sample/songdo/dromii2368/3d.html" target={'http://sample.dromii.com/sample/songdo/dromii2368/3d.html'}>
          SONGDO  |  with car 3D</a>
      </Item>
    </div>

  </div>
  );





const Samples = () => {
const { t } = useTranslation('solution');

// const videoRef = useRef();
// useEffect(() => {
//   videoRef.current.play();

// }, []);


const [selectedScreen, setSelectedScreen] = useState(1);

const showScreen = (screenNumber) => {
setSelectedScreen(screenNumber);
};




const solustionback = [
  "/images/solustionsback.png",
  "/images/soultionback2_2.png",
  "/images/captureback.png",
  "/images/combineback.png",
  "/images/processback.png",
  "/images/monitorback.png",
  "/images/CfSMback.png",
]






return(
<Container>
  <MainBanner>
    {/* <img src={samplesMain[0]} style={{width:'100%'}} /> */}
  </MainBanner>

  <Section>
    <Box>
      <img src={samplesMain[1]} style={{width:'100%'}} />
    </Box>
    {/* <div className={styles.SamplesDS}>
      {t('cfsm.section1.description')}
    </div> */}
    <div className={styles.SamplesHD}>
      <PortfolioTab t={t} />
    </div>
  </Section>


  <Section>
      <Box>
        <img src={solustionback[1]} style={{width:'100%'}} />
      </Box>
      <div className={styles.Carfreetitle}>{t('section2.title')}</div>
      <div className={styles.Carfreedesction1}>
      {t('section2.description')}
      </div>
      <div className={styles.Carfreedesction2}>
      {t('section2.description2')}
      </div>
    </Section>
    <Section>
      <Box>
      <img src={solustionback[2]} style={{width:'85%'}} />
        </Box>
      <div className={styles.capturedesction}>{t('section3.section1.description')} </div>
      {/* <div className={styles.captureimg}>
      <Video
            muted
            autoPlay
            loop
            ref={videoRef}
            src='/images/file.mp4'
          ></Video>
      
        </div> */}
    </Section>
    <Section>
        <Box>
        <img src={solustionback[3]} style={{width:'85%'}} />
        </Box>
        <div className={styles.combinedesction}>
          {t('section3.section2.description')}

        </div>
    </Section>
    
    <Section>
        <Box>
        <img src={solustionback[4]} style={{width:'85%'}} />
          </Box>
        <div className={styles.processdesction}>
        {t('section3.section3.description')}
          </div>
    </Section>
    <Section style={{marginBottom:"5vw"}}>
        <Box>
        <img src={solustionback[5]} style={{width:'85%'}} />
          </Box>
        <div className={styles.monitordesction}>
        {t('section3.section4.description')}
          </div>
    </Section>
   
  <SimpleSection >
    <Box>
      <img src={samplesMain[2]} style={{width:'100%'}} />
    </Box>
    <div className={styles.skillDS}>
      {t('sample.section2.description')}
    </div>
    <div className={styles.skillDS2}>
      {t('sample.section2.description2')}
    </div>
  </SimpleSection>
  <SliderSection>
    <div className={styles.CfMSdesction}>
      {t('section4.description')}
    </div>
    <div className={styles.CfMSImg}>
    <ReactCompareSlider style={{backgroundColor:'pink'}}
      itemOne={<ReactCompareSliderImage src="/images/dromii_before.png" style={{width:'100%'}} srcSet="/images/dromii_before.png" alt="Image one"/>}
      itemTwo={<ReactCompareSliderImage src="/images/dromii_after.png" style={{width:'100%'}} srcSet="/images/dromii_after.png" alt="Image two" />}
    />
    </div> 
  </SliderSection>

  <Platform>
    <div className={styles.btnContainer}>
      <Button onClick={()=> showScreen(1)}>
        <img src={BlockImg[0]} style={{width:'80%'}} />
      </Button>
      <Button onClick={()=> showScreen(2)}>
        <img src={BlockImg[1]} style={{width:'80%'}} />
      </Button>
      <Button onClick={()=> showScreen(3)}>
        <img src={BlockImg[2]} style={{width:'80%'}} />
      </Button>
      <Button onClick={()=> showScreen(4)}>
        <img src={BlockImg[3]} style={{width:'80%'}} />
      </Button>
      <Button onClick={()=> showScreen(5)}>
        <img src={BlockImg[4]} style={{width:'80%'}} />
      </Button>
    </div>
    <Screen>
      {selectedScreen === 1 &&
      <ScreenOne />}
      {selectedScreen === 2 &&
      <ScreenTwo />}
      {selectedScreen === 3 &&
      <ScreenThree />}
      {selectedScreen === 4 &&
      <ScreenFour />}
      {selectedScreen === 5 &&
      <ScreenFive />}
    </Screen>
  </Platform>
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
    grid-template-rows: repeat(7, 1fr);
  `;
  const Box = styled.div`
    grid-area: 1 / 1 / 8 / 12;
    margin-top:0 !important;
    display:flex;
    justify-content: center;
    align-items: center;
  `;
  const Platform = styled.div`
    width: 100%;
    margin-bottom: 5vw;
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
    border-radius: 0.2vw;
    margin: 1vw;
  `;
  const SliderSection =styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 10vw;

  `;
  const Screen = styled.div`
    font-size:1vw;
    font-weight:600;
  `;

 const SimpleSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 1fr);
 `

 const Video = styled.video`
 width: 100%;
`;