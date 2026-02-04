import { Container, H1} from '@/styles/page';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import DaasBack from '@/assets/DaasBack.png';
import daasImg from '@/assets/daas.png';
import daas3DImg from '@/assets/daas_3D.png';
import daas3D_2Img from '@/assets/daas_3D_2.png';
import daasPanoImg from '@/assets/daas_pano.png';
import daasPano_2Img from '@/assets/daas_pano_2.png';
import dtmImg from '@/assets/dtm.png';
import dtm_2Img from '@/assets/dtm_2.png';

import dtm_ai from '@/assets/dtm_ai.png';
import dtm_ai_2 from '@/assets/dtm_ai_2.png';
import dtm_ml from '@/assets/dtm_ml.png';
import dtm_ml_2 from '@/assets/dtm_ml_2.png';
import platformbanner from '@/assets/platformbanner.png';
import afggImg from '@/assets/afgg.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from "../platform/platform.module.css"
import PlatformTab from '@/components/PlatformTab/PlatformTab';
import Link from 'next/link';

const bannerImg = [
  "/images/platformbanner.png",
  "/images/DaasBack.png",
  "/images/afgg.png",
  "/images/release.png",
]

const Platform = () => {
const { t } = useTranslation('platform');
const videoRef = useRef();

const daasRef = useRef(null);
const dtmRef = useRef(null);
const cfsmRef = useRef(null);
const afggRef = useRef(null);


const handleDaasClick = () => {
  // if (daasRef.current) {
  //   const sectionTop = daasRef.current.getBoundingClientRect().top + window.pageYOffset;
  //   const sectionHeight = daasRef.current.offsetHeight; // 섹션의 높이를 가져옴
  //   const offset = -130; // 추가적으로 아래로 이동하고 싶은 높이
  //   window.scrollTo({top: sectionTop + sectionHeight + offset, behavior: 'smooth'});
  // }
  daasRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const handleDtmClick = () => {
  dtmRef.current?.scrollIntoView({ behavior: 'smooth' });
};



const handleCfSMClick = () => {
  cfsmRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const handleAfGGClick = () => {
  afggRef.current?.scrollIntoView({ behavior: 'smooth' });
};



useEffect(() => {
videoRef.current.play();
}, []);

return (
<Container>
  <MainBanner>
  </MainBanner>
  <NavContainer>
      <ul>
        <Tab onClick={handleDaasClick}>
          <a>DaaS</a>
        </Tab>
        <Tab onClick={handleDtmClick}>
          <a>DTM</a>
        </Tab>
        <Tab onClick={handleCfSMClick}>
          <a>CfSM</a>
        </Tab>
        <Tab onClick={handleAfGGClick}>
          <a>AfGG</a>
        </Tab>
      </ul>
  </NavContainer>
  <div>

  
  <div className={styles.MainContainer} >
    <div className={styles.Mainback} >
      <img src={bannerImg[0]} alt="Mainbanner" style={{width:'100%'}} />
    </div>
    <div className={styles.MainTT}>Drone as a Service</div>
    <div className={styles.MainDS} >{t('description')}</div>
  </div>
  <Section ref={daasRef} style={{paddingTop:'6vw'}}>
    <div className={styles.DaasContainer}> </div>
    <div className={styles.DaasBack}> </div>
    <div className={styles.DaasT}>DaaS</div>
    <div className={styles.DaasTT}>{t("section1.section1.title")}</div>
    <div className={styles.DaasDS}>{t("section1.section1.description")}</div>
    <div className={styles.DaasImg}>
      <Image src={daasImg} alt="DaaS" style={{width:'40vw', height:'25vw'}} />
    </div>
  </Section>
  <Section>
    <div className={styles.Daas3dContainer}> </div>
    <div className={styles.Daas3dTT}>{t("section1.section2.title")}</div>
    <div className={styles.Daas3dDS}>{t("section1.section2.description")}</div>
    <div className={styles.Daas3dImg}>
      <Image src={daas3D_2Img} alt="DaaS 3D" style={{width:'40vw',height:'25vw', marginRight:'1vw',borderRadius:'1vw'}} />
      <Image src={daas3DImg} alt="DaaS 3D" style={{width:'50w',height:'25vw', marginLeft:'1vw', borderRadius:'1vw'}} />
    </div>
  </Section>
  <Section>
    <div className={styles.DaasPanoContainer}> </div>
    <div className={styles.DaasPanoTT}>{t("section1.section3.title")}</div>
    <div className={styles.DaasPanoLink}>
    <Link href='/solutions/daaspano' >
      <p>More 〉</p>
      </Link>
    </div>
    <div className={styles.DaasPanoDS}>{t("section1.section3.description")}</div>
    <div className={styles.DaaspanoImg}>
      <Fade arrows={false}>
        <EACHSLIDE>
          <div>
            <Image src={daasPanoImg} alt="DaaS Pano" />
          </div>
        </EACHSLIDE>
        <EACHSLIDE>
          <div>
            <Image src={daasPano_2Img} alt="DaaS Pano" />
          </div>
        </EACHSLIDE>
      </Fade>
    </div>

  </Section>

  <Section ref={dtmRef} style={{paddingTop:'2vw'}}>
    <div className={styles.DTMContainer}> </div>
    <div className={styles.DTMBg}>
    <img src={bannerImg[1]} alt="DTMbanner" style={{width:'100%'}} />
    </div>
    <div className={styles.DTMBg2}></div>
    <div className={styles.DTMTT}>{t("section2.title")}</div>
    <div className={styles.DTMDS}>{t("section2.section1.title")}</div>
    <div className={styles.DTMDS2}>{t("section2.section1.description")}</div>
    <div className={styles.DTMImg}>
      <Fade arrows={false}>
        <EACHSLIDE>
          <div>
            <Image src={dtmImg} alt="DTM" 
            style={{width:'100%'}}/>
          </div>
        </EACHSLIDE>
        <EACHSLIDE>
          <div>
            <Image src={dtm_2Img} alt="DTM" style={{width:'100%'}}/>
          </div>
        </EACHSLIDE>
      </Fade>
    </div>
  </Section>
  <Section>
    <div className={styles.DTMmlContainer}> </div>
    <div className={styles.DTMmlTT}>{t("section2.section2.title")}</div>
    <div className={styles.DTMmlDS}>{t("section2.section2.description")} </div>
    <div className={styles.DTMmlImg}>
      <Fade arrows={false}>
        <EACHSLIDE>
          <div>
            <Image src={dtm_ml} alt="DTM_MLimg" />
          </div>
        </EACHSLIDE>
        <EACHSLIDE>
          <div>
            <Image src={dtm_ml_2} alt="DTM_MLimg" />
          </div>
        </EACHSLIDE>
      </Fade>
    </div>
  </Section>
  <Section>
    <div className={styles.DTMalContainer}> </div>
    <div className={styles.DTMalTT}>{t("section2.section3.title")}</div>
    <div className={styles.DTMalDS}>{t("section2.section3.description")}</div>
    <div className={styles.DTMalImg}>
      <Fade arrows={false}>
        <EACHSLIDE>
          <div>
            <Image src={dtm_ai} alt="dtm_ai_small" />
          </div>
        </EACHSLIDE>
        <EACHSLIDE>
          <div>
            <Image src={dtm_ai_2} alt="dtm_ai_small" />
          </div>
        </EACHSLIDE>
      </Fade>
    </div>
  </Section>
  <CfsmSection ref={cfsmRef}>
    <div className={styles.CfSMContainer}> </div>
    <div className={styles.CfSMTT}>{t('section3.title')}</div>
    {/* <div className={styles.CfSMTS}><img src={bannerImg[3]} alt="Mainbanner" style={{width:'100%'}} /></div> */}
    <div className={styles.CfSMDS}>{t('section3.subtitle')}</div>
    <div className={styles.CfSMLink}>
    <Link href='/solutions/cfsm' >
      <p>More 〉</p>
      </Link>
    </div>
    <div className={styles.CfSMDS2}>{t('section3.description')}</div>
    <div className={styles.CfSMImg}>
      <Video muted autoPlay loop ref={videoRef} src='/images/cfsm.mp4'></Video>
    </div>
  </CfsmSection>
  <AfggSection ref={afggRef} style={{paddingTop:'8vw', }}>
    <div className={styles.AfGGContainer}> </div>
    <div className={styles.AfGGTT}>{t('section4.title')}</div>
    <div className={styles.AfGGDS}>{t('section4.subtitle')}</div>
    <div className={styles.AfGGLink}>
    <Link href='/solutions/hdsafety' >
      <p>More 〉</p>
      </Link>
    </div>
    <div className={styles.AfGGDS2}>{t('section4.description1')}</div>
    <div className={styles.AfGGImg}>
    <img src={bannerImg[2]} alt="afggImg" style={{width:'90%'}} />
    
    </div>
     <div className={styles.AfGGDS3}>{t('section4.description2')}</div> 
  </AfggSection>
  </div>
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

export default Platform;

const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`;

const Description = styled.p`
font-size: 14px;
line-height: 1.5;
`;

const H2 = styled.h2`
font-size: 24px;
font-weight: bold;
`;

const Grid = styled.div`
margin-top: 100px;
display: flex;
gap: 60px;

div {
width: 350px;
}

img {
margin-bottom: 35px;
}
`;

const H3 = styled.h3`
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
`;

const Video = styled.video`
width: 100%;
`;

const AfGG = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
div {
width: 500px;
p {
margin-top: 20px;
}
}
`;

const EACHSLIDE = styled.div`
border-radius: 1vw;
display: flex;
width: 90%;
height: 100%;
div {
width: 100%;
border-radius: 1vw;
img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 1vw;
}
}
`;

const Section = styled.div`
width: 100%;
height: max-content;
display: grid;
grid-template-columns: 1.5fr repeat(9, 1fr) 1.5fr;
grid-template-rows: repeat(12, 1fr);

`;


const MainBanner = styled.div`
    width:100%;
    height: 4vw;
  `;



  const NavContainer = styled.nav`
  z-index:3;
  position: fixed;
  width: 100%;
  margin: auto;
  font-size: 1.2vw;
  ul {
    display: flex;
    
  }
`;

const Tab = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color:#8a8a87a5;
   color: white;
   width: 25vw;
   text-align: center;
   height: 3.2vw;


  ${({ active }) =>
    active &&
    css`
      background-color: rgba(45, 50, 74, 1);
      color: white;
    `};
`;

const CfsmSection = styled.div`
    width: 100%;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    display: grid;
    grid-template-columns: 1.5fr repeat(9, 1fr) 1.5fr;
    grid-template-rows: repeat(11, 1fr);
    padding-top:7vw;
}
`;

const AfggSection = styled.div`
    width: 100%;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    display: grid;
    grid-template-columns: 1.5fr repeat(9, 1fr) 1.5fr;
}
`;
