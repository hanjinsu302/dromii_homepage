import { Container, H1 } from '@/styles/page';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';
import styles from './kaquas.module.css'
import kaquasprbleminfo from "../../public/images/kaquas/kaquasprbleminfo.png";
import kaquasprblemtitle from "../../public/images/kaquas/kaquasprblemtitle.png";
import kaquasbanner from "../../public/images/kaquas/kaquasbanner.png";
import kaquasbanner2 from "../../public/images/kaquas/kaquasbanner2.png";
import kaquasbanner3 from "../../public/images/kaquas/kaquasbanner3.png";
import kaquasbanner4 from "../../public/images/kaquas/kaquasbanner4.png";
import kaquasbanner5 from "../../public/images/kaquas/kaquasbanner5.png";
import kaquasbanner6_kr from "../../public/images/kaquas/kaquasbanner6_kr.png";
import kaquasbanner6_en from "../../public/images/kaquas/kaquasbanner6_en.png";
import kaquassoultion1 from "../../public/images/kaquas/kaquassoultion1.png";
import kaquassoultion2 from "../../public/images/kaquas/kaquassoultion2.png";
import kaquassoultion3 from "../../public/images/kaquas/kaquassoultion3.png";
import kaquassoultion4 from "../../public/images/kaquas/kaquassoultion4.png";
import bannerKo from "../../public/images/kaquas/kaquasbanner3_kr.png";
import bannerEn from "../../public/images/kaquas/kaquasbanner3_en.png";

// const images = {
//   kr: bannerKo,
//   en: bannerEn,
// };

// const titleImg = images[currentLang];

const Kaquas = () => {
    const { t, i18n } = useTranslation('kaquas');

    // 현재 언어 확인 (예: 'ko', 'en')
  const currentLang = i18n.language;

  const images = {
  kr: bannerKo,
  en: bannerEn,
  cn: bannerEn,
};

const Endimages = {
  kr: kaquasbanner6_kr,
  en: kaquasbanner6_en,
  cn: kaquasbanner6_en,
};

const titleImg = images[currentLang];
const endImg = Endimages[currentLang];
    return( 
       <Container>
       <HeaderBox></HeaderBox>
       <div className={styles.Section}>
        <img src={kaquasbanner.src} alt="kaquas" className={styles.SectionImg} />
        <div className={styles.SectionInfoText}>
             {t("section.des")}
          </div>
          <div className={styles.SectionInfoText2}>
             {t("section.des1")}
          </div>
       </div>
       <div className={styles.Section1}>
        <div className={styles.Section1TitleBox}>
            <img src={kaquasprblemtitle.src} alt="kaquas" className={styles.Section1TitleImg} />
            <div className={styles.kaquasprblemTitleText}>
              {t("section1.des")}
            </div>
          
        </div>
        <div className={styles.Section1InfoBox}>
          <img src={kaquasprbleminfo.src} alt="kaquas" className={styles.Section1Img} />
          <div className={styles.Section1InfoText1}>
             {t("section1.des1")}
          </div>
           <div className={styles.Section1InfoText2}>
             {t("section1.des2")}
          </div>
          <div className={styles.Section1InfoText3}>
             {t("section1.des3")}
          </div>
            <div className={styles.Section1InfoText4}>
             {t("section1.des4")}
          </div>
           <div className={styles.Section1InfoText5}>
             {t("section1.des5")}
          </div>
            <div className={styles.Section1InfoText6}>
            {t("section1.des6")}
          </div>
           <div className={styles.Section1InfoText7}>
            {t("section1.des7")}
          </div>
           <div className={styles.Section1InfoText8}>
            {t("section1.des8")}
          </div>
        </div>
        
       </div>
       <div className={styles.Section2}>
          <img src={kaquasbanner2.src} alt="kaquas" className={styles.bannerImg}/>
          <div className={styles.Section2Text1}> {t("section2.des")}

          </div>
          <div className={styles.Section2Text2}>{t("section2.des1")}
          
          </div>
        </div>
        <div className={styles.Section3}>
          <div className={styles.Section3Box}>
            <div className={styles.Section3ImgBox}>
                <img src={kaquassoultion1.src} alt="kaquas" className={styles.bannerImg}/>
            </div>
            <div className={styles.Section3TextBox}>
              <div className={styles.Section3TextTitle}>{t("section3.type1.title")}
              </div>
              <div className={styles.Section3TextDes1}>{t("section3.type1.des1")}</div>
              <div className={styles.Section3TextDes2}>{t("section3.type1.des2")}</div>
              <div className={styles.Section3TextDes3}>{t("section3.type1.des3")}</div>

            </div>

          </div>
          <div className={styles.Section3Box}>
            <div className={styles.Section3TextBox}>
              <div className={styles.Section3TextTitle}>{t("section3.type2.title")}
              </div>
              <div className={styles.Section3TextDes1}>{t("section3.type2.des1")}</div>
              <div className={styles.Section3TextDes2}>{t("section3.type2.des2")}</div>
              <div className={styles.Section3TextDes3}>{t("section3.type2.des3")}</div>

            </div>
            <div className={styles.Section3ImgBox}>
              <img src={kaquassoultion2.src} alt="kaquas" className={styles.bannerImg}/>
            </div>

          </div>
          <div className={styles.Section3Box}>
            <div className={styles.Section3ImgBox}>
              <img src={kaquassoultion3.src} alt="kaquas" className={styles.bannerImg}/>
            </div>
            <div className={styles.Section3TextBox}>
              <div className={styles.Section3TextTitle}>{t("section3.type3.title")}
              </div>
              <div className={styles.Section3TextDes1}>{t("section3.type3.des1")}</div>
              <div className={styles.Section3TextDes2}>{t("section3.type3.des2")}</div>
              <div className={styles.Section3TextDes3}>{t("section3.type3.des3")}</div>

            </div>

          </div>
          <div className={styles.Section3Box}>
            <div className={styles.Section3TextBox}>
              <div className={styles.Section3TextTitle}>{t("section3.type4.title")}
              </div>
              <div className={styles.Section3TextDes1}>{t("section3.type4.des1")}</div>
              <div className={styles.Section3TextDes2}>{t("section3.type4.des2")}</div>
              <div className={styles.Section3TextDes3}>{t("section3.type4.des3")}</div>

            </div>
            <div className={styles.Section3ImgBox}>
              <img src={kaquassoultion4.src} alt="kaquas" className={styles.bannerImg}/>
            </div>

          </div>
          

    </div>
    <div className={styles.Section4}>
            <img src={titleImg.src} alt="kaquas" className={styles.kaquasbanner3} />
            <div className={styles.Section4TitleBox}>
              <div className={styles.Section4Title1}>
                {t("section4.title1")}
            </div>
            <div className={styles.Section4Title2}>
                 {t("section4.title2")}
            </div>
            </div>
            
            {/* <div className={styles.Section4SubTitle1}>{t("section4.type1.title")}</div>
            <div className={styles.Section4SubDes1}>{t("section4.type1.des")}</div>
            <div className={styles.Section4SubTitle2}>{t("section4.type2.title")}</div>
            <div className={styles.Section4SubDes2}>{t("section4.type2.des")}</div>
            <div className={styles.Section4SubTitle3}>{t("section4.type3.title")}</div>
            <div className={styles.Section4SubDes3}>{t("section4.type3.des")}</div>
            <div className={styles.Section4SubTitle4}>{t("section4.type4.title")}</div>
            <div className={styles.Section4SubDes4}>{t("section4.type4.des")}</div>
            <div className={styles.Section4SubTitle5}>{t("section4.type5.title")}</div>
            <div className={styles.Section4SubDes5}>{t("section4.type5.des")}</div>
            <div className={styles.Section4SubTitle6}>{t("section4.type6.title")}</div>
            <div className={styles.Section4SubDes6}>{t("section4.type6.des")}</div> */}
          </div>
    <div className={styles.Section6}>
      <img src={kaquasbanner4.src} alt="kaquas" className={styles.kaquasbanner4} />
      <div className={styles.Section6des}>{t("section6.des")}
      </div>
      <div className={styles.Section6des2}>{t("section6.des2")}
      </div>
      <div className={styles.Section6des3}>{t("section6.des3")}</div>
      <div className={styles.Section6des4}>{t("section6.des4")}</div>
      <div className={styles.Section6des5}>{t("section6.des5")}</div>
      <div className={styles.Section6des6}>{t("section6.des6")}</div>
    </div>

    <div className={styles.Section7}>
      <img src={kaquasbanner5.src} alt="kaquas" className={styles.kaquasbanner5} />
      <div className={styles.Section7Box}>
          <div className={styles.Section7BoxTitle}>{t("section7.type1.title")}</div>
          <div className={styles.Section7BoxDate}>{t("section7.type1.date")}</div>
          <div className={styles.Section7BoxDes1}>{t("section7.type1.des1")}</div>
          <div className={styles.Section7BoxDes2}>{t("section7.type1.des2")}</div>
      </div>
      <div className={styles.Section7Box1}>
          <div className={styles.Section7BoxTitle}>{t("section7.type2.title")}</div>
          <div className={styles.Section7BoxDate}>{t("section7.type2.date")}</div>
          <div className={styles.Section7BoxDes1}>{t("section7.type2.des1")}</div>
          <div className={styles.Section7BoxDes2}>{t("section7.type2.des2")}</div>
      </div>
      <div className={styles.Section7Box2}>
          <div className={styles.Section7BoxTitle}>{t("section7.type3.title")}</div>
          <div className={styles.Section7BoxDate}>{t("section7.type3.date")}</div>
          <div className={styles.Section7BoxDes1}>{t("section7.type3.des1")}</div>
          <div className={styles.Section7BoxDes2}>{t("section7.type3.des2")}</div>
      </div>
    </div>
    <div className={styles.Section8}>
<img src={endImg.src} alt="kaquas" className={styles.kaquasbanner5} />
<div 
  className={styles.Contact} 
  onClick={() => window.location.href = "https://k-aquas.dromii.com/"}
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
        ...(await serverSideTranslations(locale, ['kaquas', 'header'])),
      },
    };
  }
export default Kaquas;

const HeaderBox = styled.div`
height:4vw;
`