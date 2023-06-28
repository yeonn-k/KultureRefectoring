import React, { useEffect, useRef, useState } from 'react';
import { formatDateTime } from '../../utils/formatDateTime';
import { S } from './DirectBidModal.js';

const DirectBidModal = ({
  detail,
  event_token,
  coast,
  setCoast,
  ticket,
  setTicket,
  setDirectBidOpen,
  setIsDirect,
  setOrderOpen,
}) => {
  const [isLackOfToken, setIsLackOfToken] = useState(false);
  const [isValidBtn, setIsValidBtn] = useState(false);
  const inputRef = useRef();
  const outside = useRef();

  const handleHopePrice = e => {
    const newCoast = parseInt(e.target.value);
    setCoast(newCoast);
  };

  const TotalCoast = detail.highestToken * ticket;

  useEffect(() => {
    if (TotalCoast > event_token) {
      setIsValidBtn(false);
      setIsLackOfToken(true);
    } else {
      setIsValidBtn(true);
      setIsLackOfToken(false);
    }
    if (coast === 0) {
      setIsValidBtn(false);
      setIsLackOfToken(false);
    }
  }, [coast, ticket]);

  const minus = () => {
    if (ticket > 1) {
      return setTicket(ticket - 1);
    } else {
      return 1;
    }
  };

  const plus = () => {
    const MAX_COUNT = 4;
    if (ticket === MAX_COUNT) {
      return;
    } else {
      return setTicket(ticket + 1);
    }
  };

  const handleBtn = () => {
    setDirectBidOpen(false);
    setOrderOpen(true);
    setIsDirect(true);
  };

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

  const closeOrder = () => {
    setDirectBidOpen(false);
    setIsDirect(false);
  };

  //날짜 변경
  const startDate = new Date(detail?.event_start_date);

  const startTime = formatDateTime(startDate);

  return (
    <S.BidModalContainer ref={outside}>
      <S.BidModalWrapper>
        <S.CloseIcon onClick={closeOrder} />
        <S.BidModalWrap>
          <S.BidEventImg src={detail.thumbnail_images_url} alt="event" />
          <S.BidContentWrap>
            <S.BidTitle>{detail.name}</S.BidTitle>

            <S.BidContent>{startTime}</S.BidContent>
            <S.BidContent> {detail.location}</S.BidContent>
          </S.BidContentWrap>
        </S.BidModalWrap>
        <S.BidCountContainer>
          <S.BidCountWrap>
            <S.MinusIcon onClick={minus} />
            {ticket}
            <S.PlusIcon onClick={plus} />
          </S.BidCountWrap>
        </S.BidCountContainer>
        <div>
          <S.Divider />
        </div>
        <div>
          <S.BidTitle>즉시 구매가</S.BidTitle>
          <S.TokenInputWrap>
            <S.TokenInputWrap>
              <S.TokenInput onChange={handleHopePrice}>
                {TotalCoast}
              </S.TokenInput>
            </S.TokenInputWrap>

            <S.BidLargeToken
              src="/images/common/kulture-token.png"
              alt="token"
            />
          </S.TokenInputWrap>
        </div>
        <S.BidContainer>
          {isLackOfToken && (
            <S.GoToCharge>
              <S.ChargeText to="/token">
                토큰이 부족해요! 충전하러 가기!
              </S.ChargeText>
              <S.ChargeIcon />
            </S.GoToCharge>
          )}
          <S.BidSaveToken>
            <S.BidTokenPrice>보유 토큰</S.BidTokenPrice>
            <S.BidToken
              className="clickIcon"
              src="/images/common/kulture-token.png"
              alt="token"
            />
            <p>{`${Math.floor(event_token).toLocaleString()}`}</p>
          </S.BidSaveToken>
        </S.BidContainer>
        <S.DisableBidBtn onClick={handleBtn}>즉시 구매 계속</S.DisableBidBtn>
      </S.BidModalWrapper>
    </S.BidModalContainer>
  );
};

export default DirectBidModal;
