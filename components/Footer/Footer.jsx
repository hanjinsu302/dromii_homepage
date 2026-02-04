import React, {useState} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import mapperLogo from '@/assets/4SMapper_LOGO.png';
import logo from '@/assets/footerlogo.png';
import top from '@/assets/Topup.png';
import dromiiLogo from '@/assets/DroMii_LOGO.png';
import Link from 'next/link';
import styles from '../Footer/Footer.module.css';
import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Footer = () => {
  const { t } = useTranslation('header');
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' 옵션으로 부드럽게 스크롤 가능
  };

  return (
    <Container>
      <Head>
      <Link href='/platform'className={styles.HeadLink}>{t('menu1.name')}</Link>
      <Link href='/solutions/solutions'className={styles.HeadLink}> {t('menu2.name')}</Link>
      <Link href='/products/software'className={styles.HeadLink}>{t('menu3')}</Link>
      <Link href='/products/hardware'className={styles.HeadLink}>{t('menu4.name')}</Link>
      <Link href='/about'className={styles.HeadLink}>{t('menu5')}</Link>
      <Link href='/esg'className={styles.HeadLink}>ESG</Link>
      </Head>
      <div className={styles.footer}>
        <div className={styles.footerlogo}>
        <Image src={logo} alt='DroMii' className={styles.logoimg}/>
        {/* <div>
        <a className={styles.footerlogotext} href='http://dronemap.dromii.com/login'>DaaS.
        V1</a>
        <a className={styles.footerlogotext} href='http://dronemap.dromii.com:3001/login'>DaaS.V2</a>
        <a className={styles.footerlogotext} href='http://k-aquas.dromii.com/'>K-AQUAS</a>
        <a className={styles.footerlogotext} href='http://v4.dromii.com/'>K360REA</a>
        </div> */}
        <div className={styles.div7}>Copyright © 2025 DroMii all right reserved</div>
      
        </div>
        <div className={styles.footerinfo}>
          <div className={styles.footerinfobox}>
            <div className={styles.div1}><strong>Address</strong></div>
            <div className={styles.div2}>TEL</div>
            <div className={styles.div3}>FAX</div>
            <div className={styles.div4}>#205, 2F, E Dong (Seoul AI Hub) 39, Maeheon-ro 8-gil, Seocho-gu, Seoul, Korea, 06770</div>
            <div className={styles.div5}>+82 70 8806 0670</div>
            <div className={styles.div6}>+82 504 400 4396</div>
            {/* <div className={styles.div7}>Copyright © 2025 DroMii all right reserved</div> */}
            <Link legacyBehavior href='/Personalinformation'>
            <div className={styles.div8}>{t('footer1')}</div>
            </Link>
            
            <div className={styles.div9}>{t('footer2')}</div>
            <div className={styles.div10}>{t('footer3')}</div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['footer'])),
    },
  };
}

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 16vw;
  background-color: rgba(89, 88, 87, 1);
  display: flex;
  flex-direction: column;
  bottom:0;
`;
const Head = styled.footer`
  background-color: rgba(61, 61, 61, 1);
  width: 100%;
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: end; 
  padding-right:2.5vw;
`;





