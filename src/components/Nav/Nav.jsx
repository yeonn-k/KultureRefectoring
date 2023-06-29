import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL } from '../SocialOAuth.js';
import Search from './Search/Search.jsx';
import { S } from './Nav.js';

const Nav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [IsSearchOpen, setIsSearchOpen] = useState(false);
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
    window.location.reload();
  };

  useEffect(() => {
    accessToken ? setIsSignedIn(true) : setIsSignedIn(false);
  }, [location.pathname, accessToken]);

  return (
    <S.NavContainer>
      {IsSearchOpen && (
        <Search IsSearchOpen={IsSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      )}

      <S.NavTitleContainer>
        <S.NavLogo
          onClick={() => navigate('/')}
          src="/images/common/kulture-logo.png"
        />
        <ul>
          <li>
            <S.NavTitleWrap>
              <S.NavTitle to="/events?limit=6">EVENT</S.NavTitle>
              <S.NavWishlist
                onClick={() =>
                  !isSignedIn ? handleSignIn() : navigate('/wishlist?limit=6')
                }
              >
                WISHLIST
              </S.NavWishlist>
              <S.NavTitle to="/reviews">REVIEWS</S.NavTitle>
              <S.NavSearch
                src="/images/common/Search.png"
                alt="Search"
                onClick={() => setIsSearchOpen(true)}
              />
            </S.NavTitleWrap>
          </li>
        </ul>
      </S.NavTitleContainer>
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
                src="/images/common/kulture-token.png"
                alt="Token"
              />
            </S.NavTopWrap>
          </li>
        </ul>
      </div>
    </S.NavContainer>
  );
};

export default Nav;
