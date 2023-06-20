import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import { REST_API_KEY, REDIRECT_URI } from '../../components/SocialOAuth';
import { S } from './Callback';

const Callback = () => {
  const navigate = useNavigate();
  const AUTH_CODE = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${AUTH_CODE}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        const accessToken = data.access_token;
        fetch(`${APIS.users}/kakao/signin`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.accessToken) {
              localStorage.setItem('accessToken', data.accessToken);
              alert('로그인에 성공했어요!');
              navigate('/');
            } else throw new Error('로그인 에러');
          });
      });
  }, []);

  return (
    <S.Container>
      <S.Loading>로그인 중..</S.Loading>
    </S.Container>
  );
};

export default Callback;
