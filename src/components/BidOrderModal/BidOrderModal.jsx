import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL_H, BASE_URL_K } from '../../config';
import { S } from './BidOrderModal.js';

const OrderModal = ({
  detail,
  nickname,
  coast,
  setCoast,
  ticket,
  setOrderOpen,
  setModalOpen,
  email,
  setTicket,
  isDirect,
}) => {
  const inputRef = useRef();
  const outside = useRef();
  const navigate = useNavigate('');

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const handleClose = () => {
    setModalOpen(false);
    setOrderOpen(false);
    setCoast('');
    setTicket(1);
  };

  const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjg3MzQ4OTQyLCJleHAiOjE2ODgxMjY1NDJ9.f_pAeolhoGvPe1df13KLRbQGN7AwHbSPrEXge9yB-4s';

  localStorage.setItem('userToken', userToken);

  const handleBid = () => {
    const data = {
      quantity: ticket,
      biddingEventsToken: coast,
      eventId: 1,
    };

    fetch(`${BASE_URL_H}/bid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => {
        alert('입찰이 완료되었어요!');
        setModalOpen(false);
        setOrderOpen(false);
        navigate('/auction');
      });
  };
  const handleOrder = () => {
    const data = {
      eventId: 1,
      totalEventToken: detail.highestToken * ticket,
      quantity: ticket,
    };

    fetch(`${BASE_URL_K}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/list ');
        alert('구매가 완료되었어요!');
      });
  };

  console.log(isDirect);

  return (
    <S.BidModalContainer ref={outside}>
      <S.BidModalWrapper>
        <S.CloseIcon onClick={handleClose} />
        <S.BidModalWrap>
          <S.BidEventImg src={detail.thumbnail_images_url} alt="event" />
          <S.BidContentWrap>
            <S.BidTitle>{detail.name}</S.BidTitle>

            <S.BidContent>{detail.event_start_date}</S.BidContent>
            <S.BidContent> {detail.location}</S.BidContent>
          </S.BidContentWrap>
        </S.BidModalWrap>

        <div>
          <S.Divider />
        </div>
        <div>
          <S.BidTitle>입찰자 정보</S.BidTitle>
          <S.OrderContentWrap>
            <S.OrdeTitle>이름</S.OrdeTitle>
            <S.BidContent>{nickname}</S.BidContent>
          </S.OrderContentWrap>

          <S.OrderContentWrap>
            <S.OrdeTitle>이메일</S.OrdeTitle>
            <S.BidContent>{email}</S.BidContent>
          </S.OrderContentWrap>

          <S.Divider />
        </div>
        <div>
          <S.BidTitle>최종 주문 정보</S.BidTitle>
          <S.OrderContentWrap>
            <S.OrdeTitle>입찰가</S.OrdeTitle>
            <S.BidFlex>
              <S.BidToken
                className="clickIcon"
                src="./images/common/kulture-token.png"
                alt="token"
              />
              <S.BidContent>
                {isDirect ? detail.highestToken : coast}
              </S.BidContent>
            </S.BidFlex>
          </S.OrderContentWrap>
          <S.OrderContentWrap>
            <S.OrdeTitle>티켓 매수</S.OrdeTitle>
            <S.BidContent>{ticket}매</S.BidContent>
          </S.OrderContentWrap>
        </div>

        <S.PrimeDrivider />

        <S.OrderContentWrap>
          <p>총 입찰 토큰</p>
          <S.BidFlex>
            <S.BidLargeToken
              src="./images/common/kulture-token.png"
              alt="token"
            />
            <S.TotalToken>
              {isDirect ? detail.highestToken * ticket : coast * ticket}
            </S.TotalToken>
          </S.BidFlex>
        </S.OrderContentWrap>

        <S.ableBidBtn onClick={isDirect ? handleOrder : handleBid}>
          구매 입찰
        </S.ableBidBtn>
      </S.BidModalWrapper>
    </S.BidModalContainer>
  );
};

export default OrderModal;
