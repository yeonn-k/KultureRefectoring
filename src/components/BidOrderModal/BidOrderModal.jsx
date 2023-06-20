import React, { useEffect, useRef, useState } from 'react';
import { S } from './BidOrderModal.js';

const OrderModal = ({
  modalOpen,
  setModalOpen,
  detail,
  setOrderOpen,
  orderOpen,
}) => {
  const [coast, setCoast] = useState(0);
  const [ticket, setTicket] = useState(1);
  const inputRef = useRef();
  const outside = useRef();

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

  return (
    <S.BidModalContainer ref={outside}>
      <S.BidModalWrapper>
        <S.CloseIcon onClick={() => setOrderOpen(false)} />
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
            <S.BidContent>김유저</S.BidContent>
          </S.OrderContentWrap>

          <S.OrderContentWrap>
            <S.OrdeTitle>이메일</S.OrdeTitle>
            <S.BidContent>kulture@kulture.com</S.BidContent>
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
              <S.BidContent>100</S.BidContent>
            </S.BidFlex>
          </S.OrderContentWrap>
          <S.OrderContentWrap>
            <S.OrdeTitle>티켓 매수</S.OrdeTitle>
            <S.BidContent>2매</S.BidContent>
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
            <S.TotalToken>200</S.TotalToken>
          </S.BidFlex>
        </S.OrderContentWrap>

        <S.ableBidBtn>구매 입찰</S.ableBidBtn>
      </S.BidModalWrapper>
    </S.BidModalContainer>
  );
};

export default OrderModal;
