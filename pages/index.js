import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import Mainplatformback from '@/assets/Mainplatformback.png';
import { useTranslation } from 'next-i18next';
import React, { useState, useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import styles from '../css/index.module.css';
import styles from './index.module.css';
import Top from '@/components/Top/Top';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Tooltip from 'react-bootstrap/Tooltip';
  import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


const softImg = [
"./images/software/Metashpe.png",
"./images/software/simactive.png",
"./images/software/global_mapper.png",
"/images/software/drone_education_2.png"

]
const droneImg = [
"./images/drones/FIXAR_007.png",
"./images/drones/AlphaAir10_drone.png",
"./images/drones/GDU_S400E.png",
]

const sensorImg =[
  "./images/sensors/PSDK_102S_V3.png",
  "./images/sensors/SHARE_203S_PRO.png",
  "./images/sensors/SHARE_304S_PRO.png",
  "./images/sensors/SHARE_100M_PRO.png",
  "./images/sensors/SHARE_6100X.png",
  "./images/sensors/SHARE_2600_SDK.png",
  "./images/sensors/automoving.png",
  "./images/sensors/BL_CH4.jpg",

]

const newsImg =[
  "./images/News/news12.jpg",
  "./images/News/news11.jpeg",
  "./images/News/news10.jpeg",
  "./images/News/news9.png",
  "./images/News/news8.jpg",
  "./images/News/news7.png",
  "./images/News/news0.jpg",
  "./images/News/mounews.jpg",
  "./images/News/news1.png",
  "./images/News/news4.png",
  "./images/News/news2.jpg",
  "./images/News/news3.png",
  "./images/News/news5.jpg",
  "./images/News/news6.png",
  
]

const newsData = [
  {
    img: newsImg[0],
    title:"[KGCCI Innovation Awards 2025] Top 5 선정 - 3분 피칭",
    date: "2025-11-20",
  },
  {
    img: newsImg[1],
    title:"[Smart Nation] MOU협약 - SmartSel",
    date: "2025-11-19",
  },
  {
    img: newsImg[2],
    title:"[KINTEX] Hi Tech Fair - DroMii 부스 참여 ",
    date: "2025-11-15",
  },
  
  {
    img: newsImg[3],
    title:"[AICT X Centech in Montreal] AI국제공동연구사업 참여",
    date: "2025-10-30",
  },
  {
    img: newsImg[4],
    title:"K-water 내부회의 (환경관련 수자원 오염원 통합관리 시스템 관련 회의)",
    date: "2025-04-23",
  },
  {
    img: newsImg[5],
    title:"DSK 발표 :K-AQUAS (수자원 오염원 통합관리 및 의사결정 지원 시스템)외부발표",
    date: "2025-02-28",
  },
  {
    img: newsImg[6],
    title: "[부산 DSK] 전시회 참여 (with.SHARE)",
    date: "2025-02-28",
  },
  {
    img: newsImg[7],
    title: "[2025 ICT Expo in Middle East] MOU 체결 완료",
    date: "2025-02-13",
  },
  
  {
    img: newsImg[8],
    title: "[AI 캡스톤 X WE-MEET] 장려상 수상",
    date: "2024-12-17",
  },
  {
    img: newsImg[9],
    title: "[K-GeoFesta] 전시회 참여",
    date: "2024-11-05",
  },
  {
    img: newsImg[10],
    title: "[K-GeoFesta] 전시회 참여",
    date: "2024-11-05",
  },
  {
    img: newsImg[11],
    title: "[DroMii] 중동 해외시장 개척단 참여",
    date: "2024-09-23",
  },
  {
    img: newsImg[12],
    title: "[서울AI허브 2025] 드론·위성 기반의 AI 공간 솔루션 만든 ‘드로미’",
    date: "2024-09-16",
  },
  {
    img: newsImg[13],
    title: "‘2024년 비바 테크놀로지’ 경기도 DX존 운영",
    date: "2024-05-27",
  },
  // {
  //   img: newsImg[10],
  //   title: "[Soft Wave 2023] 드로미, 딥러닝 및 드론 기반 도로 분석",
  //   date: "2023-12-01",
  // },
 
];



export default function Home() {
const { t } = useTranslation('home');
const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


const mainimg = [
"./images/Mainbanner.png"
]
const ScreenOne = () => (
<div className={styles.screen}>
  <Container>
    <Top/>
    <Product>
      <ImgBox>
        <img src={droneImg[0]} style={{width:'70%'}} />
      </ImgBox>
      <ProductName>FIXAR 007</ProductName>
    </Product>
    <Product>
      <ImgBox>
        <img src={droneImg[1]} style={{width:'70%'}} />
      </ImgBox>
      <ProductName>CHCNAV AlphaAir10</ProductName>
    </Product>
    <Product>
      <ImgBox>
        <img src={droneImg[2]} style={{width:'70%'}} />
      </ImgBox>
      <ProductName>GDU S400E</ProductName>
    </Product>
  </Container>


</div>
);
const ScreenTwo = () => (
  <div className={styles.screen}>
    <Container>
    <Product>
    <ImgBox>
      <img src={sensorImg[7]} style={{width:'40%'}} />
    </ImgBox>
    <ProductName>BL-CH4 Mini</ProductName>
    
  </Product>
    <Product>
    <ImgBox>
      <img src={sensorImg[6]} style={{width:'60%'}} />
    </ImgBox>
    <ProductName>Auto Moving Light for DJI Mavic 3</ProductName>
    
  </Product>
  <Product>
    <ImgBox style={{marginBottom:'20px'}}>
      <img src={sensorImg[0]} style={{width:'50%'}} />
    </ImgBox>
    <ProductName>PSDK 102S V3</ProductName>
    
  </Product>
  <Product>
    <ImgBox>
      <img src={sensorImg[1]} style={{width:'45%'}} />
    </ImgBox>
    <ProductName>SHARE 203S PRO</ProductName>
    
  </Product>
  <Product>
    <ImgBox>
      <img src={sensorImg[2]} style={{width:'45%'}} />
    </ImgBox>
    <ProductName>SHARE 304S PRO</ProductName>
    
  </Product>
  <Product>
    <ImgBox>
      <img src={sensorImg[3]} style={{width:'45%'}} />
    </ImgBox>
    <ProductName>SHARE 100M PRO</ProductName>
    
  </Product>
  <Product>
    <ImgBox>
      <img src={sensorImg[4]} style={{width:'55%'}} />
    </ImgBox>
    <ProductName>SHARE 6100X</ProductName>
    
  </Product>
  <Product>
    <ImgBox>
      <img src={sensorImg[5]} style={{width:'45%'}} />
    </ImgBox>
    <ProductName>SHARE 2600 SDK</ProductName>
    
  </Product>
 

</Container>
    

  </div>

);
const [currentIndex, setCurrentIndex] = useState(0); // 첫 번째 슬라이드에서 시작
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // 자동 슬라이드 효과 (6초마다 변경)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [currentIndex]);

  // 다음 슬라이드 이동
  const nextSlide = () => {
    if (isAnimating) return; // 애니메이션 중 중복 실행 방지
    setIsAnimating(true);

    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => setIsAnimating(false), 500); // 애니메이션 완료 후 해제
  };

  // 이전 슬라이드 이동
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );

    setTimeout(() => setIsAnimating(false), 500);
  };


const [selectedScreen, setSelectedScreen] = useState(1);

const showScreen = (screenNumber) => {
setSelectedScreen(screenNumber);
};


return (

<>
  <MainBanner>
  <LinkBox>
          <OverlayTrigger 
                key="bottom"
                placement="bottom" 
                overlay={<Tooltip id="tooltip-bottom">{t('v1')}</Tooltip>}>
               <span className="d-inline-block">
                <LinkDaas style={{ backgroundColor:"#fd8900"}}>
                    <a href='http://dronemap.dromii.com/login' target='http://dronemap.dromii.com/login'>DaaS.V1</a>
                  </LinkDaas>
                </span>
              </OverlayTrigger>

              <OverlayTrigger 
                key="bottom"
                placement="bottom" 
                overlay={<Tooltip id="tooltip-bottom">{t('v2')}</Tooltip>}>
               <span className="d-inline-block">
                  <LinkDaas style={{backgroundColor:"#0d6efd"}}>
                    <a href='http://dronemap.dromii.com:3001/login'
                    target='http://dronemap.dromii.com:3001/login'
                    >DaaS.V2</a>
                  </LinkDaas>
                </span>
              </OverlayTrigger>
              <OverlayTrigger 
                key="bottom"
                placement="bottom" 
                overlay={<Tooltip id="tooltip-bottom">K-AQUAS</Tooltip>}>
               <span className="d-inline-block">
                  <LinkDaas style={{backgroundColor:"#5098EC"}}>
                    <a href='http://k-aquas.dromii.com/'
                    target='http://k-aquas.dromii.com/'
                    >K-AQUAS</a>
                  </LinkDaas>
                </span>
              </OverlayTrigger>
              <OverlayTrigger 
                key="bottom"
                placement="bottom" 
                overlay={<Tooltip id="tooltip-bottom">K360REA</Tooltip>}>
               <span className="d-inline-block">
                  <LinkDaas style={{backgroundColor:"#3A3D37"}}>
                    <a href='http://v4.dromii.com/'
                    target='http://v4.dromii.com/'
                    >K360REA</a>
                  </LinkDaas>
                </span>
              </OverlayTrigger>
             
          </LinkBox>
    <img src={mainimg[0]} alt='main image' style={{width:'100%'}} />
  </MainBanner>
  <Section>
    <H2>{t('Main.title')}</H2>
    <br />
    <H2 style={{marginTop:'2vw'}}>{t('Main.description')}</H2>
    <br />
    <H3>{t('Main.description2')}</H3>
    <p className={styles.main_p}>{t('Main.description3')}</p>
    <Link href='/about' className={styles.About}>
    About
    </Link>

  </Section>
  <Section>
    <div className={styles.MainPlatformContainer}>
      <div className={styles.MainPlatformBg}>
        <Image src={Mainplatformback} alt='' style={{width:'100%', height:'45vw'}} />
      </div>
      <div className={styles.MainPlatformBg2}>


      </div>
      <div className={styles.MainPlatformTT}>
        <H1>PLATFORM</H1>
      </div>
      <div className={styles.MainPlatformDS}>
        <H4> {t('Platform.description')}</H4>
      </div>
      <div className={styles.MainPlatformLM}>
        <Link href='platform' className='MainPlatformLink' style={{color:'black', fontSize:'1.3vw'}}>
            <p>More 〉</p>
        </Link>
      </div>
      <div className={styles.MainPlatformBox1}>
        <Platform>
          <H2>
            DaaS
          </H2>
          <p className={styles.box_p}>{t('Platform.DaaS')}</p>
        </Platform>
      </div>
      <Box className={styles.MainPlatformBox2}>
        <Platform>
          <H2>
            DTM
          </H2>
          <p className={styles.box_p}>{t('Platform.DTM')}</p>
        </Platform>
      </Box>
      <Box className={styles.MainPlatformBox3}>
        <Platform>
          <H2>
            CfSM
          </H2>
          <p className={styles.box_p}>{t('Platform.CfSM')}</p>
        </Platform>
      </Box>
      <Box className={styles.MainPlatformBox4}>
        <Platform>
          <H2>
            AfGG
          </H2>
          <p className={styles.box_p}>{t('Platform.AfGG')}</p>
        </Platform>
      </Box>
    </div>
  </Section>



  <Section style={{marginBottom:'5vw'}}>
  
  <Title>Sales</Title>
  <div className={styles.Sw_Container}>
    <div className={styles.Sw_title}>
      <p> Software</p>
      <Link href='/products/software' className={styles.Prolink}>
      <p>More 〉</p>
      </Link>
    </div>
    <div className={styles.Sw_ImgBox}>
      <div className={styles.softBox}>
        <img src={softImg[0]} style={{width:'90%'}} />
      </div>
      <div className={styles.softBox}>
        <img src={softImg[1]} style={{width:'90%'}} />
      </div>
      <div className={styles.softBox}>
        <img src={softImg[2]} style={{width:'90%'}} />
      </div>
      <div className={styles.softBox}>
        <img src={softImg[3]} style={{width:'90%'}} />
      </div>
    </div>
  </div>
  <div className={styles.Sw_Container}>
    <div className={styles.Sw_title}>
      <p> Hardware</p>
      <Link href='/products/hardware' className={styles.Prolink}>
      <p>More 〉</p>
      </Link>


    </div>
    <div className={styles.btnContainer}>
      <Button onClick={()=> showScreen(1)}>
        Drones
      </Button>
      <Button onClick={()=> showScreen(2)}>
        Sensors
      </Button>
    </div>
    <div>
      {selectedScreen === 1 &&
      <ScreenOne className={styles.screen} />}
      {selectedScreen === 2 &&
      <ScreenTwo className={styles.screen2} />}
    </div>
  </div>
</Section>


<section className={styles.News_Container}>

      <div className={styles.Sw_title}>
        <p>News</p>
      </div>
      <button className={styles.prevBtn} onClick={prevSlide}>
      《
        </button>
        <button className={styles.nextBtn} onClick={nextSlide}>
        》
        </button>
      <div className={styles.News_ImgContainer}>
        {newsData.map((news, index) => (
          <div
            key={index}
            className={styles.News_ImgBox}
            style={{
              transform: `translateX(${-currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <div className={styles.newsBox}>
              <div className={styles.newsImgBox}>
                <img
                  src={news.img}
                  alt={`News ${index}`}
                  className={styles.newsImgs}
                />
              </div>
              <div className={styles.newsInfo}>
                <span className={styles.newsInfoText}>News</span>
                <span className={styles.newsInfoTitle}>{news.title}</span>
                <span className={styles.newsInfoYears}>{news.date}</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      {/* 이전 버튼 */}
      
      
    </section>
   
    
  
</>
);
}
export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale, ['header', 'home'])),
},
};
}

export const MainBanner = styled.div`
position: relative;
width: 100%;
height: max-content;
`;

export const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #00000050;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: white;
font-size: 2vw;
font-weight: bold;
line-height: 1.5;
`;

const Title = styled.h2`
margin-top:1vw;
font-size: 2vw;
font-weight: bold;
width: fit-content;
position: relative;

&::before {
  content: '';
  display: block;
  width: 3vw;
  height: 0.2vw;
  background-color: rgba(35, 48, 103, 1);
  position: absolute;
  left: -4vw;
  top: 50%;
  transform: translateY(50%);
}
&::after {
content: '';
  display: block;
  width: 3vw;
  height: 0.2vw;
  background-color: rgba(35, 48, 103, 1);
  position: absolute;
  right: -4vw;
  top: 50%;
  transform: translateY(50%);
}
`;



const Platform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 80%;


h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
}

p {
  font-size: 1vw;
  line-height: 1.5;
}

a {
  display: block;
  font-size: 14px;
  position: absolute;
  bottom: 40px;
  right: 45px;
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: 2px solid #404040;
}
`;





const Section = styled.div`
  margin-top:5vw;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;



const Box = styled.div``;
const H1 = styled.h1`
  font-size:3vw;
  font-weight: 700;
`;
const H2 = styled.h2`
  font-size:3vw;
  font-weight: 700;
`;

const H3 = styled.h3`
  font-size:1.5vw;
  font-weight: 700;
`;
const H4 = styled.h4`
  font-size:1.3vw;
  font-weight: 400;
  color: black;
`;

const Button =styled.div`
  width: max-content;
  border-radius: 2vw;
  font-size: 1vw;
  padding: 0.5vw 1vw;
  border: 1px solid rgb(227, 226, 226);
  margin-right: 1vw;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  margin-right:1vw
`;
const ImgBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;


`;
const ProductName = styled.div`
  font-size: 1.1vw ;
  font-weight: 800;
  margin-bottom: 2vw;
`;

const Container = styled.div`
  width: max-content;
  display: flex;
  height:18vw;

`;


const LinkBox= styled.div`
  display:flex;
  position: absolute;
  background-color:#FFFFFF;
  top:3.8vw;
  left:5px;
  padding:0.5vw 0px;
  border-top: 1px solid black;
  width:20vw;
  border-radius: 0px 0px 0.5vw 0.5vw;
  justify-content: space-evenly;
  `
;

const LinkTri = styled.div`
  position: absolute;
  left: 19.4vw;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2.7vw 2.7vw 0 0;
  border-color: #ffffff transparent transparent transparent;

  @media (max-width: 768px) {
    border-width: 20px 20px 0 0; /* 모바일에서 고정 크기 */
  }
`;



const LinkDaas = styled.div`
    
    border-radius: 0.2vw;
    font-size:0.8vw;
    padding: 0.7vw 0.5vw;
    color: #233067;
    color: white;
    &:hover {
      color: white;
     
    }

  
  `;