
// import React, { useState, useRef } from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
// import Image from 'next/image';
// import Link from 'next/link';
// import backIcon from '@/assets/back.png';
// import styled, { css } from 'styled-components';
// import { images, sensors } from '@/public/data/sensors';



// const Sensors = () => {
// const { t } = useTranslation('hardware');
// const [isClickedBox, setIsClickedBox] = useState(null);
// const asdDivRef = useRef(null);

// const scrollToElementAbove = () => {
//   if (asdDivRef.current) {
//     const gridPosition = asdDivRef.current.getBoundingClientRect(); // Grid 요소의 현재 위치를 얻음
//     const offsetTop = gridPosition.top + window.pageYOffset - 100; // 원하는 만큼 오프셋 조정 (여기서는 100px 위로)
//     window.scrollTo({ top: offsetTop, behavior: 'smooth' }); // 계산된 위치로 스크롤
//   }
// };


// return (
// <Container>

//       <Grid ref={asdDivRef}>
//         {sensors.map((sensor, index) => (
//          <Box onClick={() => {
//           setIsClickedBox(sensor);
//           scrollToElementAbove(); // 수정된 스크롤 함수 호출
//         }} key={sensor}>
//           <Image src={images[index]} alt={sensor} style={{width:'70%' }}/>
//           <Overlay isClicked={isClickedBox === sensor} style={{fontSize:'0.7vw'}}>
//             {t(`sensors.product.${sensor}.name`)}
//           </Overlay>
//         </Box>
//         ))}
//         <Box>
//           <Overlay />
//         </Box>
//         {sensors.map((sensor, index) => (
//           <LargeBox key={sensor} open={isClickedBox} name={sensor}>
            
//             <Image src={images[index]} alt={sensor} style={{width:'15vw', height:'14vw'}}/>
//             <Overlay isClicked={isClickedBox === sensor}>
//               <CloseButton onClick={() => setIsClickedBox(null)}>
//                 <Image src={backIcon} alt='close' width={20} />
//               </CloseButton>
//               <Title>
//                 {t(`sensors.product.${sensor}.name`)} 
                
//                 <br />
//                 <span style={{fontSize:"1vw"}}>{t(`sensors.product.${sensor}.description`)}</span>
//               </Title>
//               <Description>{t(`sensors.product.${sensor}.spec`)}
//               <br/>
//               <br/>
//               <Link href={`${t(`sensors.product.${sensor}.link`)}`} legacyBehavior >
//                 <LinkA target='_blank'>More 〉 </LinkA>
//               </Link>
//               </Description>
//             </Overlay>
//           </LargeBox>
//         ))}
//       </Grid>
//     </Container>
// );
// };

// export async function getStaticProps({ locale }) {
// return {
// props: {
// ...(await serverSideTranslations(locale, ['hardware', 'header'])),
// // Will be passed to the page component as props
// },
// };
// }

// export default Sensors;

// const Container = styled.div`
// height: max-content;
// `;
// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0 auto 200px;
//   position: relative;
//   justify-content: center; /* 추가: 가운데 정렬을 위해 */
//   width: 80%; /* 수정: 전체 너비를 사용하도록 변경 */
//   max-width: 1200px; /* 추가: 최대 너비 설정 (필요에 따라 조정) */
// `;

// const Box = styled.div`
//   display: flex;
//   width: calc(33.333% - 10px); /* 수정: 전체 너비의 1/3에서 여백을 제외한 너비로 설정 */
//   height: 20vw; /* 높이는 필요에 따라 조정 */
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.2s;
//   cursor: pointer;
//   margin: 5px; /* 추가: 아이템 사이의 여백을 위해 */

//   img {
//     width: 90%;
//     height: auto; /* 수정: 이미지가 박스에 꽉 차도록 조정 */
//     transition: all 0.3s;
//   }

//   div {
//     transition: all 0.3s;
//   }

//   &:hover {
//     img {
//       transform: scale(1.2);
//     }
//     div {
//       background-color: #00000080;
//     }
//   }
// `;

// const Overlay = styled.div`
// width: 100%;
// height: ${props => props.isClicked ? '50%' : '100%'};
// position: absolute;
// top: 0;
// left: 0;
// background-color: #00000070;
// font-size: 1.5vw;
// font-weight: bold;
// text-align: center;
// color: white;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// `;

// const LargeBox = styled.div`
// z-index: -1;
// opacity: 0;
// position: absolute;
// top: 0;
// left: 0;
// background-color: white;
// width: 50%;
// height: 50%;
// transition: all 0.3s;

// & > div {
// justify-content: space-between;
// padding-top: 50px;
// }

// img {
// position: absolute;
// left: 50%;
// transform: translateX(-50%);
// }

// & > img {
// top: 10vw;

// ${({ name }) =>
// name === 'fixar' &&
// css`
// width: 100%;
// height: auto;
// `}
// }

// ${({ open, name }) => {
// if (open === name) {
// return css`
// z-index: 0;
// display: block;
// opacity: 1;
// width: 100%;
// height: 100%;
// `;
// }
// }}
// `;

// const Title = styled.p`
// padding: 1vw 7vw;
// text-align: center;
// font-size: 1.5vw;

// span {
// font-size: 1vw;
// font-weight: normal;
// margin-top: 20px;
// }
// `;

// const Description = styled.p`
// padding: 0 50px 20px;
// font-weight: normal;
// font-size: 0.8vw;
// line-height: 2;
// `;

// const CloseButton = styled.button`
// position: absolute;
// top: 30px;
// left: 50px;
// `;


// const LinkA = styled.a`
// font-size:1vw;
// margin-bottom: 30px;
//   &:hover{
//     color:orange;
//   }
//   `



import React, { useState, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import backIcon from '@/assets/back.png';
import { images, sensors } from '@/public/data/sensors';

const Sensors = () => {
  const { t } = useTranslation('hardware');
  const [selectedSensor, setSelectedSensor] = useState(null);
  const gridRef = useRef(null);

  const scrollToElement = () => {
    if (gridRef.current) {
      const position = gridRef.current.getBoundingClientRect();
      const offsetTop = position.top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Grid ref={gridRef}>
        {sensors.map((sensor, index) => (
          <Box
            key={sensor}
            onClick={() => {
              setSelectedSensor(sensor);
              scrollToElement();
            }}
          >
            <Image src={images[index]} alt={sensor} style={{ width: '100%' }} />
            <Overlay>{t(`sensors.product.${sensor}.name`)}</Overlay>
          </Box>
        ))}
      </Grid>

      <Backdrop isOpen={!!selectedSensor} onClick={() => setSelectedSensor(null)} />

      {selectedSensor && (
        <Popup isOpen={!!selectedSensor}>
          <CloseButton onClick={() => setSelectedSensor(null)}>&times;</CloseButton>
          <Image
            src={images[sensors.indexOf(selectedSensor)]}
            alt={selectedSensor}
            style={{ width: '20vw', height:'20vw'}}
          />
          <Title>
            {t(`sensors.product.${selectedSensor}.name`)}
            <br />
            <br />
            {/* <span>{t(`sensors.product.${selectedSensor}.description`)}</span> */}
          </Title>
          {/* <Description>
            {t(`sensors.product.${selectedSensor}.spec`)}
            <br />
            <br />
            <Link href={t(`sensors.product.${selectedSensor}.link`)} legacyBehavior>
              <LinkA target="_blank">More 〉</LinkA>
            </Link>
          </Description> */}
        </Popup>
      )}
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hardware', 'header'])),
    },
  };
}

export default Sensors;

const Container = styled.div`
    height: max-content;
  `;
  
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto 200px;
    width: 80%;
    max-width: 1200px;
  `;
  
  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      transition: transform 0.3s;
    }
  
    &:hover {
      transform: scale(1.05);
    }
  `;
  
  const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1vw;
    opacity: 0;
    transition: opacity 0.3s;
  
    ${Box}:hover & {
      opacity: 1;
    }
  `;
  
  const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 30vw;
    background: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 1000;
    padding: 40px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items:center;
    flex-direction:column;
  `;
  
  const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  `;
  
  const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  `;
  
  const Title = styled.p`
    padding: 1vw 6vw;
    text-align: center;
    font-size: 1vw;
    font-weight:800;
  
    span {
      font-size: 0.9vw;
      font-weight: normal;
      margin-top: 20px;
    }
  `;
  
  const Description = styled.p`
    padding: 0 50px 50px;
    font-weight: normal;
    font-size: 0.8vw;
    line-height: 1.5;
    display:flex;
     flex-direction:column;
    align-items:center;
    line-height:40px;
  `;
  
  const LinkA = styled.a`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  `;
  