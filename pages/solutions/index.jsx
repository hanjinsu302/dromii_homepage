import dynamic from 'next/dynamic';
import { Container, H1, Section } from '@/styles/page';
import Image from 'next/image';
import React, { useState, useCallback } from "react";
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import afggImg from '@/assets/afgg.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";

const DynamicGallery = dynamic(() => import('react-photo-gallery'), { ssr: false });

const photos = [
  {
    src: "/images/gallery/1 (1) (wecompress.com).JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0001.JPG",
    width: 3,
    height: 4,
  },
  {
    src: "/images/gallery/DJI_0003.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0021.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/DJI_0026.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0082.JPG",
    width: 6,
    height: 8,
  },
  {
    src: "/images/gallery/DJI_0090.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/DJI_0107.JPG",
    width: 3,
    height: 4,
  },
  {
    src: "/images/gallery/DJI_0209.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/DJI_0558.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0001.JPG",
    width: 2,
    height: 1,
  },
  {
    src: "/images/gallery/PANO0009.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0012.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/gallery/PANO0019.JPG",
    width: 1,
    height: 1,
  },
  {
    src: "/images/gallery/PANO0021.JPG",
    width: 2,
    height: 2,
  },
  {
    src: "/images/gallery/PANO0031.JPG",
    width: 7,
    height: 9,
  },
  {
    src: "/images/gallery/2.png",
    width: 4,
    height: 3,
  },
];

// const GalleryWithModal = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//
//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);
//
//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };
//
//   return (
//       <div>
//         <Gallery photos={photos} onClick={openLightbox} />
//         <ModalGateway>
//           {viewerIsOpen ? (
//               <Modal onClose={closeLightbox}>
//                 <Carousel
//                     currentIndex={currentImage}
//                     views={photos.map(x => ({
//                       ...x,
//                       srcset: x.srcSet,
//                       caption: x.title
//                     }))}
//                 />
//               </Modal>
//           ) : null}
//         </ModalGateway>
//       </div>
//   );
// };

const GalleryWithModal = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const { t } = useTranslation('solution');

  return (
    
      <div>
        
        <DynamicGallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                />
              </Modal>
          ) : null}
        </ModalGateway>

      </div>
  );
};

// const BasicRows = () => <Gallery photos={photos}/>;

const Portfolio = () => {
  const { t } = useTranslation('solution');
  // <PortfolioTab t={t} />

  function panorama1() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sko!2skr!4v1489039520439!6m8!1m7!1sF%3A-pjM4yMwFUJI%2FWMDwOESgQvI%2FAAAAAAABLuA%2F3SOYFbdyJLsu1BRcAVIZ419CVVyDs5q8QCLIB!2m2!1d37.345478!2d126.953312!3f0!4f0!5f0.7820865974627469"
            width="1400" height="450" frameBorder="5" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama2() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1529914334598!6m8!1m7!1sCAoSLEFGMVFpcE82a3V5TmRLbE9pRVdUNjNTa24zQkZZYUhtbXJIcjZIZzFJcnRv!2m2!1d37.1047421!2d127.2638929!3f359.9045094811565!4f-48.1592148257341!5f0.7820865974627469"
            width="1400" height="450" frameBorder="0" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama3() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1594780717934!6m8!1m7!1sCAoSLEFGMVFpcE1paDV4elBiYVFRS05ndkQ2SHpkZ3gtR2t3M1NjV1pJM0xHRFZK!2m2!1d35.1752217!2d129.0724753!3f264.55817205205!4f17.675962450365304!5f0.7820865974627469"
            width="1400" height="450" style={{border:5}} allowFullScreen></iframe>
    );
  }

  function panorama4() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!4v1594780976422!6m8!1m7!1sCAoSLEFGMVFpcE5LZ3EzemZmczA1bEE2cDdRSjVfeGx2TUFLR1pFdkdZbkhXOWxY!2m2!1d37.3866049!2d-121.9832137!3f103.43214183323047!4f9.653429416797735!5f0.7820865974627469"
            width="1400" height="450" frameBorder="0" style={{border:5}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    );
  }

  function _3dmapping1() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/18a444fe6d0348958ded01f846269f81?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
            >
              Surisan-20161123 Simplified 3d Mesh
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping2() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true">
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/fedb5948d35b490d9ce0c65f017cb86f?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              DJI House 3D Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping3() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/66f365b83324486cb408c622714c2844/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/66f365b83324486cb408c622714c2844?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Model Building by Dji with P (3D Mesh)
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  function _3dmapping4() {
    return (
        <div>
          <iframe
              width="640"
              height="480"
              src="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe/embed"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              onWheel={() => {}}>
          </iframe>

          <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a
                href="https://sketchfab.com/models/71f47e1fbd1f48c2833b6b10afa34efe?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Hansei-20161207 Simplified 3d Mesh
            </a>
            by
            <a
                href="https://sketchfab.com/stefano0620?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              stefano0620
            </a>
            on
            <a
                href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              Sketchfab
            </a>
          </p>
        </div>
    );
  }

  return (
    <Container>
      <Head>
        <H1>{t('title')}</H1>
        <Description>{t('description')}</Description>
      </Head>
      <Section background>
        <H2>{t('section1.title')}</H2>
        <Grid>
          <CFSM>
          <div className="child-div-1">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="25.127 60.4 150.073 79" viewBox="25.127 60.4 150.073 79" width="126" height="66" xmlns="http://www.w3.org/2000/svg" data-type="tint" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path d="M172.7 95.2c-1.7-2.3-4.2-3.7-6.9-4.1l-32.2-3.7-26.9-23.6c-2.5-2.2-5.7-3.4-9-3.4H52.3c-3.6 0-6.8 1.8-8.9 4.9l-16.5 25c-1.5 2.3-2.1 5-1.6 7.6l2.9 19.6c.8 5.2 5 9 10.1 9h10.2c1.1 7.3 7.1 12.9 14.5 12.9 7.3 0 13.3-5.6 14.5-12.9h47.6c1.1 7.3 7.1 12.9 14.5 12.9 7.3 0 13.3-5.6 14.5-12.9h8.8c5.1 0 9.3-3.7 10.1-9l2.2-14.3c-.2-2.8-.8-5.6-2.5-8zM72.9 125c-.3 5.4-4.7 9.7-10 9.7-5.5 0-10.1-4.8-10.1-10.5 0-5.8 4.5-10.5 10.1-10.5 5.3 0 9.6 4.3 10 9.7-.1.3-.2.5-.2.9 0 .2.1.5.2.7zm76.3-.6c-.1 5.7-4.6 10.4-10.1 10.4s-10-4.7-10.1-10.4v-.4c.1-5.7 4.6-10.4 10.1-10.4s10 4.7 10.1 10.4v.4zm20.9-21.8l-2.2 14.3c-.4 2.9-2.8 5-5.6 5h-8.8c-1.1-7.3-7.1-12.9-14.5-12.9-7.3 0-13.3 5.6-14.5 12.9H77.3c-1.1-7.3-7.1-12.9-14.5-12.9-7.3 0-13.3 5.6-14.5 12.9H38.2c-2.9 0-5.2-2.1-5.6-5l-2.9-19.6c-.3-1.5.1-3 .9-4.3l16.5-25c1.2-1.8 3.1-2.9 5.2-2.9h45.3c2.3 0 4.3.9 6.1 2.3l27.5 24.2c.3.3.8.4 1.2.5l32.9 3.7c1.6.2 2.9 1 3.9 2.3.8 1.3 1.2 2.9.9 4.5z" fill="#FFFFFF"></path>
                <path d="M112.5 89.2H46.8c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h65.7c1.3 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" fill="#FFFFFF"></path>
              </g>
            </svg>
          </div>
          <div className="child-div-2">
            <H3>{t('section1.section1.title')}</H3>
          </div>
          <div className="child-div-3">
            <Description>{t('section1.section1.description')}</Description>
          </div>
          <div className="child-div-4">
            <Link href='solution/cfsm'>Read More</Link>
          </div>
          </CFSM>
          <MODEL>
            <div className="child-div-1">
              <svg preserveAspectRatio="xMidYMid meet" data-bbox="35 33 130 134" viewBox="35 33 130 134" width="126" height="66" xmlns="http://www.w3.org/2000/svg" data-type="tint" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M66.9 120.9l2.5 4.1-12.7 7.8-2.5-4.1 12.7-7.8zm17.4-10.6l-10.7 6.5 2.5 4.1 10.9-6.7 7.1 1.8 1.2-4.6-6.3-1.6v-10h-4.8l.1 10.5zm46.9 14.8l12.4 3.1 1.2-4.6-12.4-3.1-1.2 4.6zM165 52.6v83L113.7 167 35 147.4v-83L86.3 33h.2L165 52.6zM84.3 93.2v-9.5L39.8 72.6v64.9l9.1-5.6 2.5 4.1-11.6 7.1v.6l71.1 17.7v-41.3l-10-2.5 1.2-4.6 8.9 2.2V90.3l-21.7-5.4v8.4l-5-.1zm28.6-7.4l47.3-29v-.6L89.1 38.6v9.3h-4.8v-8.1L39.8 67.1v.6l44.5 11.1v-1.6h4.8V80l23.8 5.8zm38.4 39.4l8.9 2.2V62.5l-44.5 27.2v26.6l10 2.5-1.2 4.6-8.9-2.2v38.9l44.5-27.2v-.6l-10-2.5 1.2-4.6zm-67-54.6h4.8V54.5h-4.8v16.1z" fill="#85FCC2"></path>
                </g>
              </svg>
            </div>
            <div className="child-div-2">
            <H3>{t('section1.section2.title')}</H3>
            </div>
            <div className="child-div-3">
            <Description>{t('section1.section2.description')}</Description>
            </div>
          </MODEL>
          <HD>
            <div className="child-div-1" id="hd1">
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 150" height="130" width="130" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>{'#hd1 svg [data-color="1"] {fill: #84fcc2;}'}</style></defs>
                <g>
                  <path d="M61.8 94.2l7-14.7L104 59.1 96.7 55 20 98.3l25.8 14.6v-9.2l16-9.5z" fill="#4db2ff" data-color="1"></path>
                  <path d="M86.5 117.6l7.2-4.1h-.1l-7.1 4.1z" fill="#4db2ff" data-color="1"></path>
                  <path d="M90.5 129.9v8.3-8.3z" fill="#4db2ff" data-color="1"></path>
                  <path d="M83.5 133.9l-.3.2 7.1 4-6.9-4v-.2h.1z" fill="#4db2ff" data-color="1"></path>
                  <path d="M180 102l-21.1-11.9v.2l-7.2 4.1v8.1l-10.8 6.3v-8.2 8.1l-7-4.1-32.6 18.9v8.4l-10.8 6.3 11.9 6.7L180 102z" fill="#4db2ff" data-color="1"></path>
                  <path d="M78.2 122.3l8.3-4.7 7.1-4.1.9-.5-32.7-18.8-16 9.5v14.7L78.2 137v-14.7zM48 116v-8l7 4.1v8l-7-4.1zm21 11.8v-8l7 4.1v8l-7-4.1z" fill="#fd2940" data-color="2"></path>
                  <path d="M101.4 98.1L95 112.9l52.3-29.5-10-5.7c-.1-.1-35.9 20.4-35.9 20.4z" fill="#4db2ff" data-color="1"></path>
                  <path d="M101.1 98.2l.2-.1 35.9-20.5 10 5.7 11.5-6.5L126 58.1l-11.2 6.7-10.3-5.9-.5.3-35.2 20.4 32.3 18.6z" fill="#fd2940" data-color="2"></path>
                  <path d="M101.3 123.6l32.6-18.9 7 4.1v-8.1 8.2l10.8-6.3v-8.1l7.2-4.1V76.8l-.1.1-11.5 6.5L95 112.9l-1.3.7-7.2 4.1-8.3 4.7V137l5-2.9.3-.2v.2l6.9 4 .1.1v-8.4 8.4h.1l10.8-6.3-.1-8.3z" fill="#dd5b82" data-color="3"></path>
                </g>
              </svg>
            </div>
            <div className="child-div-2">
              <H3>{t('section1.section3.title')}</H3>
            </div>
            <div className="child-div-3">
              <Description>{t('section1.section3.description')}</Description>
            </div>
          </HD>
          <ADP>
            <div className="child-div-1" id="adp1">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="9.999 16 180 167.999" viewBox="9.999 16 180 167.999" height="60" width="60" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>{'#adp1 svg [data-color="1"] {fill: #ffffff;}'}</style></defs>
              <g>
                <path d="M169.31 83.848c-4.858 0-9.355 1.8-12.954 4.499L128.92 62.522c4.498-4.769 7.556-11.698 7.556-18.897C136.476 28.328 124.152 16 108.77 16S81.064 28.238 81.064 43.535c0 11.698 7.556 21.956 17.811 25.825l-3.328 21.956c-7.394.288-13.045 6.42-12.249 14.019a7.016 7.016 0 0 1-.075.108l-38.231 9.628c-2.699-6.569-9.085-11.158-16.912-11.158-9.985 0-18.081 8.099-18.081 17.997s8.096 17.997 18.081 17.997c6.297 0 11.784-2.969 15.112-7.829l58.201 28.255c-.63 1.8-.9 3.599-.9 5.669 0 9.898 8.096 17.997 18.081 17.997s18.081-8.099 18.081-17.997-8.096-17.997-18.081-17.997c-.9 0-1.799 0-2.699.27l-11.154-35.184c2.069-1.8 3.328-4.499 3.958-7.199l40.66.63c1.169 10.258 9.625 17.997 20.15 17.997 11.154 0 20.51-8.998 20.51-20.426s-9.534-20.245-20.689-20.245zM108.501 70.71c6.027 0 11.784-2.07 16.282-5.399l27.796 26.185c-1.799 2.7-3.328 5.669-3.598 8.998l-40.66-.27c-1.169-3.869-3.958-7.199-7.826-8.728l3.328-21.326c1.439.54 2.879.54 4.678.54zm1.979 79.096c-3.058 1.53-5.397 3.599-7.196 6.299L45.442 127.58c.798-2.28 1.018-4.561.843-7.39l.056-.078 38.861-9.898c2.069 3.869 6.297 6.299 11.154 6.299 1.529 0 3.058-.27 4.228-.63l9.896 33.923z" fill="#F79421" data-color="1"></path>
              </g>
            </svg>
            </div>
            <div className="child-div-2">
            <H3>{t('section1.section4.title')}</H3>
            </div>
            <div className="child-div-3">
            <Description>{t('section1.section4.description')}</Description>
            </div>
          </ADP>
        </Grid>
      </Section>
      <Section>
        <H2>{t('section2.title')}</H2>
        <Grid>
          <PANORAMA>
            <div>
              {panorama1()}
            </div>
            <div>
              {panorama2()}
            </div>
            <div>
              {panorama3()}
            </div>
            <div>
              {panorama4()}
            </div>
          </PANORAMA>
        </Grid>
      </Section>
      <Section background>
        <Head>
          <H2>
            {t('section3.title')}
          </H2>
        </Head>
        <Grid2x2>
          <div className="flex-container">
            <div className="flex-row">
              <div className="flex-item">{_3dmapping1()}</div>
              <div className="flex-item">{_3dmapping2()}</div>
            </div>
            <div className="flex-row">
              <div className="flex-item">{_3dmapping3()}</div>
              <div className="flex-item">{_3dmapping4()}</div>
            </div>
          </div>
        </Grid2x2>
      </Section>
      <Section>
        <Head>
          <H2>
            {t('section4.title')}
          </H2>
        </Head>
        <Grid2x2>
          <PHOTOGRAPHY>
          <GalleryWithModal/>
          </PHOTOGRAPHY>
          {/*<div className="flex-container">*/}
          {/*  <div className="flex-row">*/}
          {/*    <div className="flex-item">{_3dmapping1()}</div>*/}
          {/*    <div className="flex-item">{_3dmapping2()}</div>*/}
          {/*  </div>*/}
          {/*  <div className="flex-row">*/}
          {/*    <div className="flex-item">{_3dmapping3()}</div>*/}
          {/*    <div className="flex-item">{_3dmapping4()}</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Grid2x2>
      </Section>
    </Container>

  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['solution', 'header'])),
    },
  };
}

export default Portfolio;

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

  div {
    width: 25%;
  }

  img {
    margin-bottom: 35px;
  }
`;

const Grid2x2 = styled.div`
  margin-top: 100px;
  display: flex;

  .flex-container {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-item {
    flex: 1;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }
`;

const PHOTOGRAPHY = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;  // 수평 가운데 정렬
    align-items: center;  // 수직 가운데 정렬
    width: 75%;
  }
`;


const H3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Video = styled.video`
  width: 90vw;
  margin-top: 100px;
`;

const PANORAMA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  div {
    width: 100%;
  }
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
    display: flex;
    width: 350px;
    height: 238px;
    div {
      width: 75%;
      img {
        width: 350px;
        height: 238px;
        object-fit: cover;
      }
    } 
`;

const CFSM = styled.div`
  display: flex;
  background-color: black;
  height: 628px;
  align-items: flex-start;
  flex-direction: column;

  /* CFSM 내부의 첫 번째 자식 div */
  .child-div-1 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-2 {
    width: 75%;
    margin-top: 20px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }
  
  .child-div-3 {
    width: 75%;
    margin-top: 10px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }
  
  .child-div-4 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }  
`;
const MODEL = styled.div`
  background-color: dimgray;
  align-items: center;
  justify-content: center;
  height: 628px;
  /* CFSM 내부의 첫 번째 자식 div */
  .child-div-1 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-2 {
    width: 75%;
    margin-top: 20px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: #00D0A2;             /* 글자색을 하얀색으로 */
  }

  .child-div-3 {
    width: 75%;
    margin-top: 10px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-4 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }
`;
const HD = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  height: 628px;
  /* CFSM 내부의 첫 번째 자식 div */
  .child-div-1 {
    width: 75%;
    margin-top: 50px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: black;             /* 글자색을 하얀색으로 */
  }

  .child-div-2 {
    width: 75%;
    margin-top: 1px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: #00D0A2;             /* 글자색을 하얀색으로 */
  }

  .child-div-3 {
    width: 75%;
    margin-top: 10px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: black;             /* 글자색을 하얀색으로 */
  }

  .child-div-4 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: black;             /* 글자색을 하얀색으로 */
  }
`;
const ADP = styled.div`
  background-color: #00D0A2;
  align-items: center;
  justify-content: center;
  height: 628px;
  /* CFSM 내부의 첫 번째 자식 div */
  .child-div-1 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-2 {
    width: 75%;
    margin-top: 20px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-3 {
    width: 75%;
    margin-top: 10px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }

  .child-div-4 {
    width: 75%;
    margin-top: 100px;
    margin-left: 12.5%;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    color: white;             /* 글자색을 하얀색으로 */
  }
`;
