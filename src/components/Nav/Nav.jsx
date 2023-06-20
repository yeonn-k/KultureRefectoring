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
    fetch(`${APIS.users}/kakao/signout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'Logout successful') {
          localStorage.removeItem('accessToken');
          alert('로그아웃 되었습니다!');
          navigate('/');
        } else throw new Error('로그아웃 에러');
      });
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
