  import React, { useState } from 'react';
  import styled, { css } from 'styled-components';
  import logo2 from '@/assets/logo2.png';
  import logo1 from '@/assets/4smapper_logos.png';
  import Image from 'next/image';
  import Link from 'next/link';
  import { useRouter } from 'next/router';
  import { useTranslation } from 'next-i18next';
  // import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  import styles from './header.module.css'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Tooltip from 'react-bootstrap/Tooltip';

  const vectorimg = [
    "/images/Vector.png"
  ]

  const Header = () => {
    

    const [openLanguage, setOpenLanguage] = useState(false);
    const route = useRouter();
    const { t } = useTranslation('header');
    const otherLocales = route.locales.filter(locale => locale !== route.locale);
    const additionalLanguages = otherLocales.slice(0, 2); // 선택되지 않은 두 개의 언어만 표시


      return (
        <Container main={route.pathname === '/'}>
          <Link href='/'>
            <Logo>
              <Image src={logo2} alt='DroMii' style={{width:'8.2vw', height:"2.6vw"}} />
            </Logo>
          </Link>
          
          
          <Nav>
        
            <ul>
              <Li>
                <Link legacyBehavior href='/platform'>
                  {t('menu1.name')}
                </Link>
              </Li>
              <Li>
                <Link legacyBehavior href='/solutions/solutions'>
                {t('menu2.name')}
                </Link>
                <NavDepth2>
                <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/solutions/cfsm'>
                      <a >
                      CfSM
                      </a>
                    </Link>
                  </li>

                  <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/solutions/3dSamples'>
                      <a>
                        3D MODELING
                      </a>
                    </Link>
                  </li>
                  
                  <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/solutions/hdsafety'>
                      <a >
                      HD SAFETY MAP
                      </a>
                    </Link>
                  </li>

                  <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/solutions/automatic'>
                      <a >
                        AUTOMATIC DATA PROCESSING
                      </a>
                    </Link>
                  </li>
                  
                  <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    
                      <a target='http://sample.dromii.com/index.html' href='http://sample.dromii.com/index.html'>
                      PROCESSING RESULTS
                      </a>
                    
                  </li>
                </NavDepth2>
              </Li>

              <Li>
                <Link legacyBehavior href='/products/software'>
                {t('menu3')}
                </Link>
              </Li>
              <Li>
                <Link legacyBehavior href='/products/hardware'>
                {t('menu4.name')}
                </Link>
              </Li>
              <Li>
                <Link legacyBehavior href='/application'>
               APPLICATION
                </Link>
                <NavDepth3>
                <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/application/kaquas'>
                      <a >
                      {/* {t('menu2.depth2.menu5')} */}K-AQUAS
                      </a>
                    </Link>
                  </li>
                  <li className={styles.li_bottom} style={{padding:'1vw 0px'}}>
                    <Link legacyBehavior href='/application/droad'>
                      <a >
                      {/* {t('menu2.depth2.menu5')} */}D-ROAD
                      </a>
                    </Link>
                  </li>
                </NavDepth3>
              </Li>
             
              <div className={styles.about_link}>
                <Link  href='/contact'>
                  {t('menu6')}
                </Link>
              </div>
            </ul>
          </Nav>
          <Languages>
            <div onClick={() => setOpenLanguage((current) => !current)}>
              {route.locale.toUpperCase()}  <img src={vectorimg[0]} style={{width:'1.1vw'}}/>
            </div> 
            {openLanguage && (
              <Options>
                {additionalLanguages.map((locale) => (
                  <li key={locale}>
                    
                    <Link
                      href={`/${route.pathname}`}
                      locale={locale}
                      onClick={(event) => {
                        event.stopPropagation();
                        setOpenLanguage(false);
                      }}
                    >
                      {locale.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </Options> 
            )}

          </Languages>
          <MapperLogo>
          <a href='http://www.4smapper.com/' target='http://www.4smapper.com/'>
          <Logos>
              <Image src={logo1} alt='4smapper' style={{width:"4vw", height:"4vw"}}/>
            </Logos>
          </a>
          </MapperLogo>
        
        </Container>
      );
  };

  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['header'])),
      },
    };
  }

  export default Header;

  const Container = styled.header`
    display:flex !important;; 
    algin-items: center !important;;
    font-family: 'Noto Sans KR', sans-serif !important;
    text-transform: none !important;
    width: 100%;
    height: 4vw;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 0 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1vw !important;
    font-weight: normal !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: #f7f7f7;

  
  `;

  const Logo = styled.h1`
    display: flex;
    align-items: center;
    margin-left:1vw;
    margin-right:2vw;
  `;
  const Logos = styled.div`
    display: flex;
    align-items: center;
    margin-right:2vw;
  `;

  const MapperLogo = styled.div`
    display: flex;
    align-items: center;
  `;

  const Nav = styled.nav`
  width:100%;
    height: 100%;
    & > ul {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left:10vw;
    }

    a {
      display:flex;
      height: 100%;
      align-items: center;
      justify-content:center;
      padding: 0px 1vw;
    }
  `;

  const Li = styled.li`
    width:8vw;
    margin-left:1vw;
    padding: 2vw 0;
    position: relative;
    height: 100%;

    &:hover {
      &::before {
        content: '';
        display: block;
        width: 1vw;
        height: 10px;
        background-color: #000741;
        position: absolute;
        top: -1px;
        left: 50%;

        transform: rotate(45deg) translateX(-50%);
      }
    }

    &:hover {
      ul {
        display: block;
      }
    }
  `;

  const Languages = styled.ul`
    width: 9vw;
    height: 2.6vw;
    margin-right:2vw;
    position: relative;
    font-size: 1vw;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:#f7f7f7;
    border: 0.15vw solid #233067;
    border-radius: 0.3vw;
    font-weight: 600;
    // margin-right:1vw;
    color:#233067;
    &:hover {
      font-weight:800;
    }
  `;

  const Options = styled.div`
    border-top:1px solid gray;
    position: absolute;
    width: 7vw;
    top: 3.2vw;
    background-color:#f7f7f7;
    border-radius: 0vw 0px 0.2vw 0.2vw;
    color: gray;
    font-weight: 600;
    &:hover {
      border-bottom : none;
    }
    li {
      border-top: 1px solid gray; 
    }

    li:hover {
      height:100%;
      color: #233067;
    
      
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      margin-top:1vw;
      margin-bottom:1vw;
    }
  `;

  const NavDepth2 = styled.ul`
    width: 10vw;
    display: none;
    position: absolute;
    top: 4vw;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #d8d8d8;
    border-radius: 0vw 0px 0.2vw 0.2vw;
    background-color: #f7f7f7;
    z-index: 1;
    color: #a7a6a6;

    
    li {
      /* padding: 0.5vw 0; */
      text-align: center;
      cursor: pointer;
    }
    li:hover {
      color: #030137;
      
    }
    li.small {
      font-size: 0.5vw;
    }
  `;
  const LinkDaas = styled.div`
    margin-left:0.7vw;
    border-radius: 0.2vw;
    font-size:0.8vw;
    padding: 0.7vw 0.5vw;
    color: #233067;
    color: white;
    &:hover {
      color: white;
     
    }

  
  `;



const LinkBox= styled.div`
  display:flex;
  position: absolute;
  background-color:white;
  top:4vw;
  left:0px;
  padding:5px 0px;
  border-top: 1px solid black;
  `
;

const LinkTri =styled.div`
  position: absolute;
  left:19.4vw;
  top:0;
  border-style:solid;
  border-width: 2.7vw 2.7vw 0px 0px;
  border-color: #FFFFFF transparent transparent transparent;
`;

const NavDepth3 = styled.ul`
    width: 10vw;
    display: none;
    position: absolute;
    top: 4vw;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #d8d8d8;
    border-radius: 0vw 0px 0.2vw 0.2vw;
    background-color: #f7f7f7;
    z-index: 1;
    color: #a7a6a6;

    
    li {
      /* padding: 0.5vw 0; */
      text-align: center;
      cursor: pointer;
    }
    li:hover {
      color: #030137;
      
    }
    li.small {
      font-size: 0.5vw;
    }
  `;