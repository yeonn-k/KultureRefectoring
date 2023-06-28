import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import { formatDateTime } from '../../utils/formatDateTime';
import { S } from './BidOrderModal.js';

const BidOrderModal = ({
  id,
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
  const TOKEN = localStorage.getItem('accessToken');

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

  const handleBid = () => {
    const data = {
      quantity: ticket,
      biddingEventsToken: coast,
      eventId: detail.id,
    };

    fetch(`${APIS.bid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
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
      eventId: detail.id,
      totalEventToken: detail.highestToken * ticket,
      quantity: ticket,
    };

    fetch(`${APIS.order}/now`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => {
        alert('구매가 완료되었어요!');
        navigate('/order ');
      });
  };

  //날짜 변경
  const startDate = new Date(detail?.event_start_date);

  const startTime = formatDateTime(startDate);

  return (
    <S.BidModalContainer ref={outside}>
      <S.BidModalWrapper>
        <S.CloseIcon onClick={handleClose} />
        <S.BidModalWrap>
          <S.BidEventImg src={detail.thumbnail_images_url} alt="event" />
          <S.BidContentWrap>
            <S.BidTitle>{detail.name}</S.BidTitle>

            <S.BidContent>{startTime}</S.BidContent>
            <S.BidContent> {detail.location}</S.BidContent>
          </S.BidContentWrap>
        </S.BidModalWrap>

        <div>
          <S.Divider />
        </div>
        <div>
          <S.BidTitle> {isDirect ? '주문자 정보' : '입찰자 정보'}</S.BidTitle>
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
            <S.OrdeTitle> {isDirect ? '구매 가격' : '입찰가'}</S.OrdeTitle>
            <S.BidFlex>
              <S.BidToken
                className="clickIcon"
                src="/images/common/kulture-token.png"
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
              src="/images/common/kulture-token.png"
              alt="token"
            />
            <S.TotalToken>
              {isDirect ? detail.highestToken * ticket : coast * ticket}
            </S.TotalToken>
          </S.BidFlex>
        </S.OrderContentWrap>

        <S.OrderContentWrap>
          <p>기부액</p>

          <S.BidFlex>
            <S.BidContent>
              {isDirect
                ? `${(detail.highestToken * ticket * 100).toLocaleString()}원`
                : `${(coast * ticket * 100).toLocaleString()}원`}
            </S.BidContent>
          </S.BidFlex>
        </S.OrderContentWrap>

        <S.ableBidBtn onClick={isDirect ? handleOrder : handleBid}>
          {isDirect ? '구매 확정' : '구매 입찰'}
        </S.ableBidBtn>
      </S.BidModalWrapper>
    </S.BidModalContainer>
  );
};

export default BidOrderModal;
