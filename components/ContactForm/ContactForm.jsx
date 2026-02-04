import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import {useTranslation} from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef();

  const getEmailForm = (e) => {

    e.preventDefault();
    const formData = new FormData(formRef.current);  // 폼 데이터 수집
    const from_name = formData.get("from_name");
    const from_email = formData.get("from_email");
    const message = formData.get("message");

    if (!from_name) {
      alert(t('errMsg1'));
      return;
    }

    if (!from_email) {
      alert(t('errMsg2'));
      return;
    }

    if (message.length === 0) {
      alert(t('errMsg3'));
      return;
    }

    // alert(formData.get("from_name"));
    // alert(formData.get("from_email"));
    // alert(formData.get("message"));
    const recaptchaValue = window.grecaptcha && window.grecaptcha.getResponse();

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    emailjs.sendForm(
        'service_4idrxjp', //서비스 인증키
        'template_x1ubzcp', // 이메일 양식 인증키
        formRef.current,
        'vMyiJpFWgakuuVlPC' // 계정 인증키
      )
      .then(
        (result) => {
          alert('Email has been successfully sent.');
          e.target.reset();
        },
        (error) => console.log(error)
      );
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      <Form ref={formRef} onSubmit={getEmailForm}>
        <div>
          <Label>Name</Label>
          <Input type='text' name='from_name' />
        </div>
        <div>
          <Label>Email</Label>
          <Input type='email' name='from_email' />
        </div>
      
        <div>
          <Label>Message</Label>
          <Textarea type='text' name='message' />
        </div>
        <div class="g-recaptcha" data-theme="light" data-sitekey="6LcBIh8oAAAAAGQpi0UW_Wxtjiu7eyazxYHVHAdJ"/>
        <CaptchaContainer>
       
          <ButtonContainer>
            <Button>Send</Button>
          </ButtonContainer>
        </CaptchaContainer>
        
        
        
        <div className='thankyou_message' style={{ display: 'none' }}>
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 30vw;
`;

const Label = styled.p`
  font-weight: bold;
  display:flex;
  font-size:1vw;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5vw;
  border: 1px solid #a8a8a8;
  border-radius: 3px;
  margin: 0.2vw 0 1vw;
  text-indent: 10px;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 8vw;
  resize: none;
  border: 1px solid #a8a8a8;
  border-radius: 3px;
  margin: 0.2vw 0 1vw;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Loacal = styled.div`
background-color:green;
transform:scale(0.17);
transform-origin:0 0;
@media only screen and (max-width: 1000px) {
  transform:scale(0.57);
  transform-origin:0 0;
  }  
@media only screen and (max-width: 800px) {
  transform:scale(0.37);
  transform-origin:0 0;
  }  
  
`;

const ButtonContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: end;
  margin-top:1vw;
`;
const Button = styled.button`
color: white;
font-weight: 600;
background-color: #233067;
width:7.5vw;
height:2.8vw;
border-radius: 0.2vw;
font-size:1vw;
`;
