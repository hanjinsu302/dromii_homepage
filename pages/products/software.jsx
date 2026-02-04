  import { Container} from '@/styles/page';
  import React, { useState } from 'react';
  import styled, { css } from 'styled-components';
  import globalMapperImg from '@/assets/software.png';
  import metashapeImg from '@/assets/metashape.png';
  import correlator from '@/assets/correlator.png';
  import trainingEducation from '@/assets/trainingEducation.png';
  import { useTranslation } from 'next-i18next';
  import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  import ProductsTab from '@/components/ProductsTab/ProductsTab';
  import styles from './software.module.css';
  const images = [globalMapperImg, metashapeImg, correlator, trainingEducation];

  const bannerImg =[
  '/images/softwarebanner.png',
  '/images/softwaretitlebanner.png'
  ]

  const softImg = [
  "/images/software/Metashape_logo.png",
  "/images/software/correlator3d_Logo.png",
  "/images/software/Global Mapper Pro_Lgo.png",
  "/images/software/drone_education_1.png"

  ]
  const Software = () => {
  const { t } = useTranslation('software');


  return (
    <Container>
      <MainBanner>
      <ProductsTab />
      </MainBanner>
      <div style={{height:'4vw'}}></div>
        <img src={bannerImg[0]} alt='mainbannerimg' style={{width:'100%'}} />
      
      <p className={styles.title}>{t("section5.description")} </p>
      <img src={bannerImg[1]} alt='softwaretitlebannerimg' style={{width:'80%'}} />

      <Section>
        <Box>
          <ImgBox>
            <img src={softImg[0]} alt='mainbannerimg' style={{width:'80%'}} />
          </ImgBox>
          <InfoBox>
          <Title>{t("section6.section1.title")}</Title>
              <Description>{t("section6.section1.description")}
              </Description>

          </InfoBox>
        </Box>
        <Box>
          <ImgBox>
            <img src={softImg[1]} alt='mainbannerimg' style={{width:'75%'}} />
          </ImgBox>
          <InfoBox>
          <Title>{t("section6.section3.title")}</Title>
              <Description>{t("section6.section3.description")}
              </Description>

          </InfoBox>
        </Box>
        <Box>
          <ImgBox>
            <img src={softImg[2]} alt='mainbannerimg' style={{width:'80%'}} />
          </ImgBox>
          <InfoBox>
          <Title>{t("section6.section2.title")}</Title>
              <Description>{t("section6.section2.description")}
              </Description>

          </InfoBox>
        </Box>
        <Box>
          <ImgBox>
            <img src={softImg[3]} alt='mainbannerimg' style={{width:'80%'}} />
          </ImgBox>
          <InfoBox>
          <Title>{t("section6.section4.title")}</Title>
              <Description>{t("section6.section4.description")}
              </Description>

          </InfoBox>
        </Box>
      </Section>
    </Container>
  );
  };

  export async function getStaticProps({ locale }) {
    return {
      props: {
      ...(await serverSideTranslations(locale, ['software', 'header'])),
      // Will be passed to the page component as props
      },
    };
  }

  export default Software;


    const Section = styled.div`
        display: flex;
        justify-content: space-around;
        width:100%;
        height:max-content;
        display:flex;

        @media (max-width: 768px) {
          // 화면의 너비가 768px 이하일 때 적용할 스타일
          flex-direction: column;
          align-items:center;
        }
    `;



  const Title = styled.p`
      margin-top: 1vw;
      font-size: 1.8vw;
      margin-left: 1vw;
      font-weight: 800;
      @media (max-width: 768px) {
        font-size: 3vw;
        line-height:3vw;
        
      }
  `;
  const Description = styled.p`
      margin-top: 2vw;
      font-size: 0.9vw;
      margin-left: 1vw;
      font-weight: 550;
      margin-bottom: 1vw;
      line-height:1.5vw;
      @media (max-width: 768px) {
        font-size: 2vw;
        line-height:3vw;
        
      }
      
  `;

  const MainBanner = styled.div`
  display:flex;
  align-items: end;
  width:100%;
  height: 7vw;
  position:absolute;
`;

const Box = styled.div`
width:20vw;
height:25vw;
margin-bottom: 10vw;
@media (max-width: 768px) {
  width:40vw;
height:45vw;
  
}
`;
const ImgBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
height:55%;
`;
const InfoBox = styled.div`
width:100%;
height:45%;
box-shadow: 0.5px 0.5px 1px 1px rgba(0.1, 0.1, 0.1, 0.1);
border-radius: 5px;
padding-top:10px;
`;