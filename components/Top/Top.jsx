
import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import top from '@/assets/Topup.png';

const Top = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' 옵션으로 부드럽게 스크롤 가능
      };
 

  return (
        
            <Topup onClick={handleScrollToTop}>
                <Image src={top} alt='DroMii' width={25}/>
            </Topup>
      
  );
};

export default Top;




const Topup = styled.div`
position:fixed;
display:flex;
align-items: center;
z-index:20;
background-color: #595857;
justify-content: center;
width:50px;
height:50px;
border-radius: 50%;
right:20px;
bottom:20px;

`;



