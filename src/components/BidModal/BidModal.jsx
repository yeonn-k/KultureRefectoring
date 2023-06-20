import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { S } from './BidModal.js';
import OrderBidModal from '../BidOrderModal/BidOrderModal.js';

const BidModal = ({
  modalOpen,
  setModalOpen,
  detail,
  setOrderOpen,
  orderOpen,
}) => {
  const [coast, setCoast] = useState(0);
  const [ticket, setTicket] = useState(1);
  const [isLackOfToken, setIsLackOfToken] = useState(false);
  const [saveToken, setSaveToken] = useState(100);
  const [isValidBtn, setIsValidBtn] = useState(false);
  const inputRef = useRef();
  const outside = useRef();

  const handleBtn = () => {
    if (coast > saveToken) {
      setIsValidBtn(false);
    } else {
      setIsValidBtn(true);
    }
    setOrderOpen(true);
  };

  const handleHopePrice = e => {
    setCoast(e.target.value);
    coast > saveToken ? setIsLackOfToken(true) : setIsLackOfToken(false);
    setIsValidBtn(true);
  };

  const minus = () => {
    if (ticket > 1) {
      return setTicket(ticket - 1);
    } else {
      return 1;
    }
  };

  const plus = () => {
    if (ticket == 4) {
      return 4;
    } else {
      return setTicket(ticket + 1);
    }
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

  return (
    <S.BidModalContainer ref={outside}>
      <S.BidModalWrapper>
        <S.CloseIcon onClick={() => setModalOpen(false)} />
        <S.BidModalWrap>
          <S.BidEventImg src={detail.thumbnail_images_url} alt="event" />
          <S.BidContentWrap>
            <S.BidTitle>{detail.name}</S.BidTitle>

            <S.BidContent>{detail.event_start_date}</S.BidContent>
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
          <S.BidTitle>구매 희망가</S.BidTitle>
          <S.TokenInputWrap>
            <S.TokenInput
              ref={inputRef}
              type="number"
              onChange={handleHopePrice}
            />
            {!coast && (
              <S.Placeholder
                onClick={() => {
                  inputRef?.current?.focus();
                }}
              >
                희망가 입력
              </S.Placeholder>
            )}
            <S.BidLargeToken
              src="./images/common/kulture-token.png"
              alt="token"
            />
          </S.TokenInputWrap>
        </div>
        <S.BidContainer>
          <S.BidSaveToken>
            <S.BidTokenPrice>보유 토큰</S.BidTokenPrice>
            <S.BidToken
              className="clickIcon"
              src="./images/common/kulture-token.png"
              alt="token"
            />
            <p>{saveToken}</p>
          </S.BidSaveToken>

          {isLackOfToken && (
            <S.GoToCharge>
              <S.ChargeText to="/mytoken">
                토큰이 부족해요! 충전하러 가기!
              </S.ChargeText>
              <S.ChargeIcon />
            </S.GoToCharge>
          )}
        </S.BidContainer>
        <S.DisableBidBtn disabled={!isValidBtn} onClick={handleBtn}>
          구매 입찰 계속
        </S.DisableBidBtn>
      </S.BidModalWrapper>
    </S.BidModalContainer>
  );
};

export default BidModal;
