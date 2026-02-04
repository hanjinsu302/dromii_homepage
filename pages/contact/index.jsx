import { Container, H1 } from '@/styles/page';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import ContactForm from '@/components/ContactForm/ContactForm';
import { useTranslation } from 'next-i18next';
import styles from './contact.module.css'
const img =[
  "/images/unsplash_7aakZdIl4vg.png"
]
const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <Container>
      <HeaderBox></HeaderBox>
      <TitleBox>
        CONTACT

      </TitleBox>
      <div className={styles.ContactContainer}>
     

      <div className={styles.ContactFormContainer}>
        <img src={img[0]}className={styles.contactimg}/>
        <ContactForm />
      </div>
      <div className={styles.MapContainer}>


      <Map>
      <div style={{width:'30vw', height:'15vw'}}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.7864325503933!2d127.0340485550032!3d37.46576412679831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca12bc1630dc5%3A0x52a24ed5437417e2!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDrp6Ttl4zroZw46ri4IDM5!5e0!3m2!1sko!2skr!4v1680489526516!5m2!1sko!2skr'
          width='100%'
          height='100%'
          loading='lazy'
          // referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        </div>
        <Address>
          <p>{t('HQ.name')}</p>
          <p>{t('HQ.address')}</p>
          <p>Tel: +82 70 8806 0670</p>
        </Address>
      </Map>
      <Map>
      <div style={{width:'30vw',height:'15vw'}}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373.89873624532726!2d127.09510362722602!3d37.41216890185161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7d52994f731%3A0x6689debf16f85785!2z6rK96riw6riw7JeF7ISx7J6l7IS87YSw!5e0!3m2!1sko!2skr!4v1723783789518!5m2!1sko!2skr'
          width='100%'
          height='100%'
          loading='lazy'
          // referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        </div>
        <Address>
          <p>{t('AILAB.name')}</p>
          <p>{t('AILAB.address')}</p>
          <p>Tel: +82 70 8806 0670</p>
        </Address>
      </Map>
      </div>
      
      </div>
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'header'])),
    },
  };
}

export default Contact;
const HeaderBox = styled.div`
height:4vw;
`
const TitleBox = styled.div`
height:10vw;
display:flex;
align-items:center;
justify-content:center;
font-size:2.5vw;
font-weight:600;
`;

const Map = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  margin-bottom: 3vw;
  width:40vw;

  &:last-child {
    
  }
  p{
    font-size: 0.8vw;
  }

  
`;

const Address = styled.div`
  line-height: 1.6;
  width: 100%;


  p:first-child {
    font-size: 1.2vw;
    font-weight: bold;
    margin-bottom: 0.5vw;
  }
  p {
    + p {
      margin-bottom: 0.5vw;
    }
  }
`;
