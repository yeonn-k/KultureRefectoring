import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import { makeParams } from '../../utils/makeParams';
import { S } from './PaymentCallback';

const PaymentCallback = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const tid = localStorage.getItem('tid');
  const orderId = localStorage.getItem('orderId');
  const userId = localStorage.getItem('userId');
  const currentParams = new URLSearchParams(window.location.search);
  const pgToken = currentParams.get('pg_token');

  const keys = [
    'cid',
    'tid',
    'partner_order_id',
    'partner_user_id',
    'pg_token',
  ];

  const values = ['TC0ONETIME', tid, orderId, userId, pgToken];

  useEffect(() => {
    const params = makeParams(keys, values);
    fetch(`https://kapi.kakao.com/v1/payment/approve`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`,
      },
      body: params.toString(),
    })
      .then(res => res.json())
      .then(data => {
        fetch(`${APIS.payment}/kakao`, {
          method: 'POST',
          headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(data => {
            if (data.message === 'Payment successful') {
              localStorage.removeItem('tid');
              localStorage.removeItem('orderId');
              localStorage.removeItem('userId');
              alert('토큰 충전이 완료되었어요!');
              navigate('/token');
              window.location.reload();
            } else throw new Error('결제 에러');
          });
      });
  }, []);

  return (
    <S.Container>
      <S.Loading>결제 중..</S.Loading>
    </S.Container>
  );
};

export default PaymentCallback;
