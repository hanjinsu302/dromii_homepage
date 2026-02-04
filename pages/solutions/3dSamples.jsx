import PortfolioTab from "@/components/SolutionTab/SolutionTab.jsx";
import dynamic from 'next/dynamic';
import { Container } from '@/styles/page';
import React, { useState, useCallback } from "react";
import styled from 'styled-components';
import Carousel, { Modal, ModalGateway } from "react-images";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import 'react-slideshow-image/dist/styles.css';
import styles from './3dSamples.module.css';



const DynamicGallery = dynamic(() => import('react-photo-gallery'), { ssr: false });

const samplesMain =[
  "/images/3dsamplebanner.png",
  "/images/3dsamplebanner2.png",
  "/images/sampleback2.png",
  "/images/samplebanner.png",
  "/images/skillbanner.png",
  ]

const photos = [
  {
    src: "/images/gallery/1 (1) (wecompress.com).JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0001.JPG",
    width: 3,
    height: 4,
  },
  {
    src: "/images/gallery/DJI_0003.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0021.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/DJI_0026.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0082.JPG",
    width: 6,
    height: 8,
  },
  {
    src: "/images/gallery/DJI_0090.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/DJI_0107.JPG",
    width: 3,
    height: 4,
  },
  {
    src: "/images/gallery/DJI_0209.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0558.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0001.JPG",
    width: 2,
    height: 1,
  },
  {
    src: "/images/gallery/PANO0009.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0012.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0019.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/PANO0021.JPG",
    width: 2,
    height: 2,
  },
  {
    src: "/images/gallery/PANO0031.JPG",
    width: 7,
    height: 9,
  },
  {
    src: "/images/gallery/2.png",
    width: 4,
    height: 3,
  },
];







const Portfolio = () => {
  const { t } = useTranslation('platform');
  function _3dmapping1() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Surisan-20161123 Simplified 3d Mesh
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping2() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              DJI House 3D Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping3() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/66f365b83324486cb408c622714c2844/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/66f365b83324486cb408c622714c2844?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Model Building by Dji with P (3D Mesh)
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping4() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Hansei-20161207 Simplified 3d Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  return (
    <Container>
      <MainBanner>
       {/* <img src={samplesMain[0]} style={{width:'100%'}} /> */}
      </MainBanner>
      <Section>
        <Box>
          <img src={samplesMain[1]} style={{width:'100%'}} />
        </Box>
        {/* <div className={styles.SamplesDS}>
          {t('sample.section1.description')}
        </div> */}
        <div className={styles.SamplesHD}>
          <PortfolioTab t={t} />
        </div>
        
      </Section>
      <ImgSection style={{marginBottom:"3.5vw"}}>
            <img src={samplesMain[4]} style={{width:'90%'}} />
          <Title>{t('section5.title')}</Title>
          <Description>{t('section5.description')}</Description>
        </ImgSection>
      <img src={samplesMain[3]} style={{width:'100%'}} />
      <Section>

      </Section>
      <SampleBox background2>
          <Grid2x2>
            <div className="flex-container">
              <div className="flex-row">
                <div className="flex-item">{_3dmapping1()}</div>
                <div className="flex-item">{_3dmapping2()}</div>
              </div>
              <div className="flex-row">
                <div className="flex-item">{_3dmapping3()}</div>
                <div className="flex-item">{_3dmapping4()}</div>
              </div>
            </div>
          </Grid2x2>
      </SampleBox>
    </Container>

  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['platform', 'header'])),
    },
  };
}

export default Portfolio;


  const Grid2x2 = styled.div`
    margin-top: 1vw;
    display: flex;

    .flex-container {
      display: flex;
      flex-direction: column;
    }

    .flex-row {
      display: flex;
      flex-direction: row;
    }

    .flex-item {
      flex: 1;
      padding: 1vw;
      text-align: center;
    }
  `;

  const MainBanner = styled.div`
    width:100%;
    height: 4vw;
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

  const SampleBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:10vw;
    
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
       margin-top: 4.5%;
       margin-right:42.5%;
    `;
    const Description = styled.div`
       position: absolute;
       width: 60vw;
       display: flex;
       font-size: 1.3vw;
       font-weight: 500;
       line-height: 2vw;
       margin-top: 15%;
       margin-left: 4.5%;
    `;

  