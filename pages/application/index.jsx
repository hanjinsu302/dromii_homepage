import { Container, H1 } from '@/styles/page';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import styles from './application.module.css'
const img =[
  "/images/usecase/usecase_banner.png"
]


  const bannerImg =[
  '/images/applicationbanner.png',
  ]

  const cardImg =[
    '/images/kaquas/kaquas_card.png',
    '/images/kaquas/droad_card.png',
    '/images/kaquas/under_card.png',
  ]

const Application = () => {
    const { t } = useTranslation('application');
    return( 
       <Container>
         <div style={{height:'4vw'}}></div>
          <img src={bannerImg[0]} alt='mainbannerimg' style={{width:'100%'}} />
          <div className={styles.CardContainer}>
            <div className={styles.Card}>
              <img src={cardImg[0]} alt='mainbannerimg' style={{width:'100%'}} />
              <p className={styles.cardTitle}>AI 기반 수질 모니터링 및 <br/>오염원 분석 솔루션</p>
              <p className={styles.cardDes1}>위성 드론 영상을 활용한 토지피복 분류 및 오염 탐지</p>
              <p className={styles.cardDes2}>데이터 기반 인사이트로 우선관리지역을 도와줍니다</p>
              <div className={styles.LearnMore}><Link legacyBehavior href='/application/kaquas'>
            Learn More
      </Link></div>

            </div>
            <div className={styles.Card}>
              <img src={cardImg[1]} alt='mainbannerimg' style={{width:'100%'}} />
              <p className={styles.cardTitle}>AI 드론기반 도로 유지관리 및<br/>위험 탐지 솔루션</p>
              <p className={styles.cardDes1}>드론과 AI로 포트홀,균열등 도로 위험요소를 자동 탐지합니다.</p>
              <p className={styles.cardDes2}>대시보드를 통해 실시간 분석과 알림을 제공 합니다</p>
               <div className={styles.LearnMore}>
                <Link legacyBehavior href='/application/droad'>
            Learn More
      </Link></div>

            </div>
            <div className={styles.Card}>
              <img src={cardImg[2]} alt='mainbannerimg' style={{width:'100%'}} />
              <p className={styles.cardDes3}>새로운 응용 분야가 활발히 개발 중이며,<br/>향후 시범 사업을 통해 선보일 예정입니다.</p>

            </div>
            
          </div>
       
       </Container>
    )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['application', 'header'])),
      },
    };
  }
export default Application;

const HeaderBox = styled.div`
height:4vw;
`