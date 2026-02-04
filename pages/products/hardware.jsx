
import { Container, H1 } from '@/styles/page';
import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import ProductsTab from '@/components/ProductsTab/ProductsTab';
import styles from "./hardware.module.css"
import Sensors from './hardware/sensors';
import Operational from './hardware/operational';
import Sales from './hardware/sales';

const bannerImg = [
'/images/hardwarebanner.png'
]
const image = [
"/images/drones/drone_1.png",
"/images/drones/drone_2.png",
 "/images/drones/drone_3.png",
]

const ScreenOne = () => (
<div className={styles.screen}>
  <Sales />
</div>
);
const ScreenTwo = () => (
<div className={styles.screen}>
  <Sensors />
</div>
);
const ScreenThree = () => (
<div className={styles.screen}>
  <Operational />
</div>
);


const Hardware = () => {
const { t } = useTranslation('hardware');
const [currentSlide, setCurrentSlide] = useState(0);
const [selectedScreen, setSelectedScreen] = useState(1);

const showScreen = (screenNumber) => {
setSelectedScreen(screenNumber);
};
const handlePrevClick = () => {
setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
};

const handleNextClick = () => {
setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
};

const prevImage = image[(currentSlide - 1 + image.length) % image.length];
const nextImage = image[(currentSlide + 1) % image.length];

return (
<Container>
  <MainBanner>
      <ProductsTab />
  </MainBanner>
  <div style={{height:'4vw'}}></div>
      <img src={bannerImg[0]} alt='mainbannerimg' style={{width:'100%'}} />
  <Section style={{marginTop:'5vw'}}>
    <div className={styles.slider_container}>
      <div className={styles.sub_images}>
        <div className={styles.sub_image}>
          <img src={prevImage} alt="Previous" />
        </div>
        <div className={styles.sub_image}>
          <img src={nextImage} alt="Next" />
        </div>
      </div>
      <button className={styles.prev_button} onClick={handlePrevClick}>❬</button>
      <div className={styles.main_image}>
        <img src={image[currentSlide]} alt={`Slide ${currentSlide}`} />
      </div>
      <button className={styles.next_button} onClick={handleNextClick}>❭</button>
    </div>
  </Section>
  <Section>
    <Button  onClick={()=> showScreen(1)}>
      SENSORS
    </Button>
    <Button  onClick={()=> showScreen(2)}>
      DRONE
    </Button>
    <Button  onClick={()=> showScreen(3)}>
      GNSS
    </Button>
  </Section>
  <Section>
    {selectedScreen === 1 &&
    <ScreenOne />}
    {selectedScreen === 2 &&
    <ScreenTwo />}
    {selectedScreen === 3 &&
    <ScreenThree />}
  </Section>
</Container>
);
};

export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale, ['hardware', 'header'])),
},
};
}

export default Hardware;

const Section = styled.div`
width:100%;
height: max-content;
display:flex;
align-items: center;
justify-content: center;
`;

const Button =styled.div`
width: 12vw;
display:flex;
align-items: center;
justify-content: center;
border-radius: 3vw;
font-size: 1vw;
margin: 8vw 1.5vw 0 1.5vw;
color: black;
font-weight:600;
padding: 1vw 0px;
border: 0.2vw solid black;
&:hover{
background-color: rgba(35, 48, 103, 1);
color:white;
border: 0.2vw solid rgba(35, 48, 103, 1);
}
`;
const MainBanner = styled.div`
  display:flex;
  align-items: end;
  width:100%;
  height: 7vw;
  position:absolute;
  // margin-top:4vw;
`;