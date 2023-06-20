import React from 'react';
import { FooterContainer, FooterImg } from './Footer';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterImg
        onClick={() => navigate('/')}
        src="../images/common/kulture-logo-mono.png"
      />
    </FooterContainer>
  );
};

export default Footer;
