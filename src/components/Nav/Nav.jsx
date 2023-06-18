import React from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './Nav.js';
const Nav = () => {
  const navigate = useNavigate();

  return (
    <S.NavContainer>
      <div>
        <ul>
          <li>
            <S.NavTopWrap>
              <S.LoginBtn>LOGIN</S.LoginBtn>
              <S.NavTokenImg
                onClick={() => navigate('/token')}
                src="./images/common/kulture-token.png"
                alt="Token"
              />
            </S.NavTopWrap>
          </li>
        </ul>
      </div>

      <S.NavTitleContainer>
        <S.NavLogo
          onClick={() => navigate('/')}
          src="./images/common/kulture-logo.png"
        />
        <ul>
          <li>
            <S.NavTitleWrap>
              <S.NavTitle to="/list">EVENT</S.NavTitle>
              <S.NavTitle to="/wishlist">WISHLIST</S.NavTitle>
              <S.NavSearch src="./images/common/Search.png" alt="Search" />
            </S.NavTitleWrap>
          </li>
        </ul>
      </S.NavTitleContainer>
    </S.NavContainer>
  );
};

export default Nav;
