import { Container, H1 } from '@/styles/page';
import { useEffect, useRef } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import styles from './droad.module.css'

import droadbanner from "../../public/images/droad/droadbanner.png";
import droadbanner2_ko from "../../public/images/droad/droadbanner2_kr.png";
import droadbanner2_en from "../../public/images/droad/droadbanner2_en.png";
import droadbanner3Ko from "../../public/images/droad/droadbanner3_kr.png";
import droadbanner3En from "../../public/images/droad/droadbanner3_en.png";
import kaquasprbleminfo from "../../public/images/kaquas/kaquasprbleminfo.png";
import kaquasprblemtitle from "../../public/images/kaquas/kaquasprblemtitle.png";
import droadimg1 from "../../public/images/droad/droad_img1.png";
import droadimg2 from "../../public/images/droad/droad_img2.png";
import droadimg3 from "../../public/images/droad/droad_img3.png";
import droad_section5_banner_kr from "../../public/images/droad/droad_section5_banner_kr.png";
import droad_section5_banner_en from "../../public/images/droad/droad_section5_banner_en.png";
import droad_section6_banner_kr from "../../public/images/droad/droad_section6_banner_kr.png";
import droad_section6_banner_en from "../../public/images/droad/droad_section6_banner_en.png";
import droad_section7_banner_kr from "../../public/images/droad/droad_section7_banner_kr.png";
import droad_section7_banner_en from "../../public/images/droad/droad_section7_banner_en.png";
import droad_section8_banner_kr from "../../public/images/droad/droad_section8_banner_kr.png";
import droad_section8_banner_en from "../../public/images/droad/droad_section8_banner_en.png";







const Droad = () => {
    const { t, i18n } = useTranslation('droad');

    const currentLang = i18n.language;
    
      const images = {
      kr: droadbanner3Ko,
      en: droadbanner3En,
      cn: droadbanner3En,
    };
    const droadbanner2 = {
      kr: droadbanner2_ko,
      en: droadbanner2_en,
      cn: droadbanner2_en,
    };

      const section5images = {
      kr: droad_section5_banner_kr,
      en: droad_section5_banner_en,
      cn: droad_section5_banner_en,
    };
     const section6images = {
      kr: droad_section6_banner_kr,
      en: droad_section6_banner_en,
      cn: droad_section6_banner_en,
    };

     const section7images = {
      kr: droad_section7_banner_kr,
      en: droad_section7_banner_en,
      cn: droad_section7_banner_en,
    };
    const section8images = {
      kr: droad_section8_banner_kr,
      en: droad_section8_banner_en,
      cn: droad_section8_banner_en,
    };

    const titleImg = images[currentLang];
    const droadbanner2Img = droadbanner2[currentLang];
    const section5Img = section5images[currentLang];
    const section6Img = section6images[currentLang];
    const section7Img = section7images[currentLang];
    const section8Img = section8images[currentLang];


    
    return( 
         <Container>
       <HeaderBox></HeaderBox>
       <div className={styles.Section}>
        <img src={droadbanner.src} alt="droad" className={styles.SectionImg} />
        <div className={styles.SectionInfoText}>
             {t("section.des")}
          </div>
         
       </div>
       <div className={styles.Section1}>
        <div className={styles.Section1TitleBox}>
            <img src={kaquasprblemtitle.src} alt="kaquas" className={styles.Section1TitleImg} />
            <div className={styles.kaquasprblemTitleText}>
              {t("section1.des")}
            </div>
        </div>
         <img src={droadbanner2Img.src} alt="droad" className={styles.Section1Img} />
       </div>

       <div className={styles.Section2}>
        <img src={titleImg.src} alt="kaquas" className={styles.SectionImg} />
       </div>


       <div className={styles.Section3}>
          <div className={styles.Section3Box}>
            <div className={styles.Section3ImgBox}>
              <video
        src="/images/cfsm.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.Section3Video}
      />
            </div>
          <div className={styles.Section3TextContainer}>
            <div className={styles.Section3TextBox}>
              <Title>{t("section3.title")}</Title>
              <Des>{t("section3.des")}</Des>
            </div>
            <div className={styles.Section3TextBox}>
              <Des1>{t("section3.des1")}</Des1>
              <Des1>{t("section3.des2")}</Des1>
            </div>

          </div>
        </div>
        
       </div>

       <div className={styles.Section4}>
        <div className={styles.Section4Box}>
           <div className={styles.Section4_Infocontainer}>
          <div className={styles.Section4_TextBox}>
            <Title>{t("section4.sub.title")}</Title>
              <Des>{t("section4.sub.des")}</Des>
               <Des1>{t("section4.sub.des1")}</Des1>
              <Des1>{t("section4.sub.des2")}</Des1>
          </div>
          <div className={styles.Section4_ImgBox}>
            <img src={droadimg1.src} alt="droad" className={styles.Section4Img} />
          </div>

        </div>
          <div className={styles.Section4_Infocontainer}>
          
          <div className={styles.Section4_ImgBox}>
            <img src={droadimg2.src} alt="droad" className={styles.Section4Img} />   
          </div>
          <div className={styles.Section4_TextBox}>
            <Title>{t("section4.sub1.title")}</Title>
              <Des>{t("section4.sub1.des")}</Des>
               <Des1>{t("section4.sub1.des1")}</Des1>
              <Des1>{t("section4.sub1.des2")}</Des1>
          </div>

        </div>
          <div className={styles.Section4_Infocontainer}>
          <div className={styles.Section4_TextBox}>
            <Title>{t("section4.sub2.title")}</Title>
              <Des>{t("section4.sub2.des")}</Des>
               <Des1>{t("section4.sub2.des1")}</Des1>
              <Des1>{t("section4.sub2.des2")}</Des1>
          </div>
          <div className={styles.Section4_ImgBox}>
            <img src={droadimg3.src} alt="droad" className={styles.Section4Img} />
          </div>

        </div>
        </div>
       

       </div>
       <div className={styles.Section5}>
        {/*<Des1>{t("section5.des")}</Des1>
        <Des2>{t("section5.des1")}</Des2>
        <div className={styles.Section5Box}>
          <div className={styles.Section5InfoContainer}>
            <div style={{backgroundColor:"#5FBAC1"}} className={styles.Section5InfoBox}>
              <div className={styles.Section5Title}>
                <Des1 style={{marginTop:'0px',color:'white'}}>{t("section5.sub.title")}</Des1>
              </div>
          
                <div className={styles.Section5Info}>
                  <div className={styles.Section5InfoImg}></div>
                  <div className={styles.Section5InfoText}>
                    <Title style={{color:'white'}}>{t("section5.sub.des")}</Title>
                    <Des1 style={{color:'white'}}>{t("section5.sub.des1")}</Des1>
                  </div>
                </div>     
          </div>
          </div>
        </div>*/}
        <img src={section5Img.src} alt="kaquas" className={styles.SectionImg} />
       </div>
       <div className={styles.Section6} >
        <img src={section6Img.src} alt="kaquas" className={styles.Section6Img} />
       </div>
       <div className={styles.Section7}>
        <img src={section7Img.src} alt="kaquas" className={styles.SectionImg} />
       </div>
       <div className={styles.Section8}>
        <img src={section8Img.src} alt="kaquas" className={styles.SectionImg} />
        <div 
  className={styles.Contact} 
  onClick={() => window.location.href = "http://d-road.dromii.com/login"}
>
  CONTACT
</div>
       </div>
       </Container>
    )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['droad', 'header'])),
      },
    };
  }
export default Droad;

const HeaderBox = styled.div`
height:4vw;
`
const Title = styled.div`
font-size:1.5vw;
color:#FF6B00;
font-weight:800;
margin-top:1.5vw
`
const Des = styled.div`
font-size:2vw;
color:#6B7684;
font-weight:800;
line-height:1.2;
margin-top:1vw
`
const Des1 = styled.div`
font-size:1vw;
font-weight:800;
line-height:1.2;
margin-top:1.5vw
`

const Des2 = styled.div`
font-size:1.5vw;
font-weight:800;
line-height:1.2;
margin-top:0.5vw
`

