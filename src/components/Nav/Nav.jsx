import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APIS } from '../../config.js';
import { KAKAO_AUTH_URL } from '../SocialOAuth.js';
import { S } from './Nav.js';

const Nav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  const handleSignIn = () => {
    window.location.href = `${KAKAO_AUTH_URL}`;
  };

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  useEffect(() => {
    accessToken ? setIsSignedIn(true) : setIsSignedIn(false);
  }, [location.pathname, accessToken]);

  return (
    <S.NavContainer>
      <div>
        <ul>
          <li>
            <S.NavTopWrap>
              {!isSignedIn ? (
                <S.LoginBtn onClick={handleSignIn}>LOGIN</S.LoginBtn>
              ) : (
                <>
                  <S.LogoutBtn onClick={handleSignOut}>LOGOUT</S.LogoutBtn>
                  <S.MyBtn
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  >
                    MY PAGE
                  </S.MyBtn>
                </>
              )}
              <S.NavTokenImg
                onClick={() =>
                  !isSignedIn ? handleSignIn() : navigate('/token')
                }
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
              <S.NavWishlist
                onClick={() =>
                  !isSignedIn ? handleSignIn() : navigate('/wishlist')
                }
              >
                WISHLIST
              </S.NavWishlist>
              <S.NavSearch src="./images/common/Search.png" alt="Search" />
            </S.NavTitleWrap>
          </li>
        </ul>
      </S.NavTitleContainer>
    </S.NavContainer>
  );
};

export default Nav;
