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
  const images = [globalMapperImg, metashapeImg, correlator, trainingEducation];

  const bannerImg =[
  '/images/productsbanner.png',

  ]


  const Products = () => {
  const { t } = useTranslation('software');


  return (
    <Container>
      <MainBanner>
      <ProductsTab />
      </MainBanner>
      <img src={bannerImg[0]} alt='mainbannerimg' style={{width:'100%'}} /> 
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

  export default Products;


    const Section = styled.div`
        width:100%;
        height:max-content;
        display:flex;
    `;

    const Box = styled.div`
        width: 50%;
        height: 100%;
        flex-direction: column;
        display: flex;
        align-items: end;
    `;
    const Box1 = styled.div`
        display: flex;
        width: 100%;
        height: max-content;
        margin-bottom: 15vw;
    `;

  const ItemBox = styled.div`
      width: 87%;
      height: max-content;
  `;
  const ImgBox = styled.div`
      width: 100%;
      height: max-content;
  `;
  const ImgBox1 = styled.div`
      display: flex;
      align-items: center;
      justify-content: end;
      width: 55%;
      padding-right: 5vw;
  `;

  const InfoBox = styled.div`
      margin-top: 2vw;
      margin-bottom: 5vw;
      margin-left: 1vw;
      display: flex;
      flex-direction: column;
      width: 23vw;
      padding: 0.5vw;
      height: 13vw;
      box-shadow: 0.5px 0.5px 1px 1px rgba(0.1, 0.1, 0.1, 0.1);
      border-radius: 0.5vw;
    `;
  const InfoBox1 = styled.div`
      display: flex;
      align-items: center;
      width: 45%;
  `;

  const Title = styled.p`
      margin-top: 1vw;
      font-size: 1.8vw;
      margin-left: 1vw;
      font-weight: 800;
  `;
  const Description = styled.p`
      margin-top: 2vw;
      font-size: 0.9vw;
      margin-left: 1vw;
      font-weight: 550;
      margin-bottom: 1vw;
      line-height:1.5vw;
  `;

  const MainBanner = styled.div`
  display:flex;
  align-items: end;
  width:100%;
  height: 7vw;
`;