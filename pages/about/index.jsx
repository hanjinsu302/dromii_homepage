import { Container, H1 } from '@/styles/page';
import React from 'react';
import { Overlay as OverlayStyle } from '..';
import styled from 'styled-components';
import styles from './about.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const aboutBanner = [
"/images/aboutbanner.png",
]
const aboutImg = [
"/images/about_1.png",
"/images/about_2.png",
"/images/aboutback3.png",
"/images/abouthsback.png",
"/images/aboutciback.png",
]


const About = () => {
const { t } = useTranslation('about');


return (
<Container>
  <MainBanner>
    <img src={aboutBanner[0]} style={{width:'100%'}} />
  </MainBanner>
  <AboutSection>
    <div className={styles.box1}></div>
    <div className={styles.box2}>
      <img src={aboutImg[2]} style={{width:'80%'}} />
    </div>
    <div className={styles.box3}>
      {t('section1.title')}
    </div>
    <div className={styles.box4}>
      <img src={aboutImg[0]} style={{width:'80%'}} />
    </div>
    <div className={styles.box5}> {t('section1.description')} </div>
    <div className={styles.box7}> {t('section1.description2')} </div>
  </AboutSection>
  {/* <Section>
    <div className={styles.historyBack}>
      <img src={aboutImg[3]} style={{width:'100%'}} />
    </div>
    <p className={styles.hsp1}>{t('section2.description')}</p>
    <p className={styles.hsp2}> {t('section2.description2')}</p>
    <p className={styles.hsp3}> {t('section2.description3')}</p>
    <p className={styles.hsp4}> {t('section2.description4')}</p>
    <p className={styles.hsp5}> {t('section2.description5')}</p>
    <p className={styles.hsp6}> {t('section2.description6')}</p>
    <p className={styles.hsp7}> {t('section2.description7')}</p>
    <p className={styles.hsp8}> {t('section2.description7')}</p>
  </Section> */}
  <Section>
    <div className={styles.CIBack}>
      <img src={aboutImg[4]} style={{width:'90%'}} />
    </div>
    <p className={styles.cip1}>{t('section3.description')}</p>
    <p className={styles.cip2}>{t('section3.description2')}</p>
    <p className={styles.cip3}>{t('section3.description3')}</p>
    <p className={styles.cip4}>{t('section3.description4')}</p>
  </Section>
</Container>
);
};

export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale, ['about', 'header', 'footer'])),
},
};
}

export default About;



const Section = styled.div`
width:100%;
height: max-content;
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(12, 1fr);
`;

const MainBanner = styled.div`
width:100%
height: max-content;
`;

const AboutSection = styled.div`
width: 100%;
height: -webkit-max-content;
height: -moz-max-content;
height: max-content;
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(12, 1fr);
`;


//git 테스트를 위한 파일 변경 테스트