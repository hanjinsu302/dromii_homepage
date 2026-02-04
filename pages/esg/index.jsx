import { Container, H1 } from '@/styles/page';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import styles from './esg.module.css'

import esg_ko from "../../public/images/esg_ko.png"
import esg_en from "../../public/images/esg_en.png"


   
   
const Esg = () => {
    const { t, i18n } = useTranslation('esg');
    const currentLang = i18n.language;
    const bannerimages = {
          kr: esg_ko,
          en: esg_en,
          cn: esg_en,
        };


    const bannerImg = bannerimages[currentLang];
    return( 
        <Container>
          <MainBanner>
          <img src={bannerImg.src} alt="Mainbanner" style={{width:'100%'}} />
         
          {/* <a href="/files/윤리강령.hwpx" download>
    <DownloadButton>윤리강령 다운 받기</DownloadButton>
  </a> */}
  
          </MainBanner>
          {/* 다운로드 버튼 */}
          
  
          </Container>
    )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['esg', 'header'])),
      },
    };
  }
export default Esg;


const MainBanner = styled.div`
margin-top:4vw;
    width:100%;
    height:max-contents;
    display:flex;
    flex-direction: column;
    align-items: center;
   justify-content: center;

  `;


  // styled-component 버튼 스타일
const DownloadButton = styled.button`
  padding: 0.8vw 1vw;
  font-size: 1vw;
  background-color:rgb(156, 156, 156);
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 5vw;
  margin-top: 2vw;
  &:hover {
    background-color:rgb(19, 19, 19);
  }
`;