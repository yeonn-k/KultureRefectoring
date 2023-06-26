import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import My from '../../components/My/My.jsx';
import { APIS } from '../../config.js';
import { makeParams } from '../../utils/makeParams.js';
import tokenImg from '../../images/kulture-token.png';
import { M } from '../../components/My/My';
import { T } from '../../components/Token';
import { S } from './MyToken';

const MyToken = () => {
  const [userInfo, setUserInfo] = useState({});
  const [chargeAmount, setChargeAmount] = useState(0);
  const [paymentKRW, setPaymentKRW] = useState(0);
  const [historyList, setHistoryList] = useState([]);

  const handleKakaoReady = () => {
    const params = makeParams(keys, values);

    if (chargeAmount === 0) {
      alert('충전 옵션을 선택해주세요.');
    } else
      fetch(`https://kapi.kakao.com/v1/payment/ready`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: `KakaoAK ${process.env.REACT_APP_ADMIN_KEY}`,
        },
        body: params.toString(),
      })
        .then(res => res.json())
        .then(data => {
          if (data.tid) {
            window.localStorage.setItem('tid', data.tid);
            window.localStorage.setItem(
              'orderId',
              params.get('partner_order_id')
            );
            window.localStorage.setItem('userId', userId);
            window.location.href = data.next_redirect_pc_url;
          }
        });
  };

  useEffect(() => {
    fetch(`${APIS.users}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]));
  }, []);

  //userInfo Mock Data
  // useEffect(() => {
  //   fetch('data/userInfo.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserInfo(data);
  //     });
  // }, []);

  //TokenHistory Mock Data
  useEffect(() => {
    fetch('data/tokenHistory.json')
      .then(res => res.json())
      .then(data => {
        setHistoryList(data);
      });
  }, []);

  const { userId, event_token } = userInfo;
  const keys = [
    'cid',
    'partner_order_id',
    'partner_user_id',
    'item_name',
    'quantity',
    'total_amount',
    'vat_amount',
    'tax_free_amount',
    'approval_url',
    'cancel_url',
    'fail_url',
  ];

  const values = [
    'TC0ONETIME',
    nanoid(),
    userId,
    '토큰 충전',
    chargeAmount,
    paymentKRW,
    0,
    0,
    'http://localhost:3000/payment/callback/kakao',
    'http://localhost:3000/token',
    'http://localhost:3000/token',
  ];

  return (
    <>
      <M.Title>내 토큰</M.Title>
      <M.Container>
        <My />
        <M.MainContainer>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                토큰 충전하기
              </M.Text>
            </M.SectionTitleWrapper>
            <S.ChargeBox>
              <S.LineUnit>
                <M.Text size="20px" weight="600">
                  현재 보유 토큰
                </M.Text>
                <S.TokenUnit gap="15px">
                  <T.Token src={tokenImg} size="35px" />
                  <M.Text size="30px" weight="600">
                    {Math.floor(event_token).toLocaleString()}
                  </M.Text>
                </S.TokenUnit>
              </S.LineUnit>
              <S.LineUnit>
                <M.Text size="20px" weight="600">
                  충전 예정 토큰
                </M.Text>
                <S.TokenUnit gap="15px">
                  <T.Token src={tokenImg} size="35px" />
                  <M.Text size="30px" weight="600">
                    {chargeAmount.toLocaleString()}
                  </M.Text>
                </S.TokenUnit>
              </S.LineUnit>
              <S.AlertDiv>
                <S.ZeroAlert status={chargeAmount !== 0}>
                  *아래에서 옵션을 선택해주세요.
                </S.ZeroAlert>
              </S.AlertDiv>
              <S.Divider />
              <S.LineUnit>
                <M.Text size="22px" weight="600">
                  결제 금액
                </M.Text>
                <S.KRWUnit gap="10px">
                  <M.Text size="40px" weight="600">
                    {paymentKRW.toLocaleString()}
                  </M.Text>
                  <M.Text size="18px" weight="600">
                    원
                  </M.Text>
                </S.KRWUnit>
              </S.LineUnit>
              <M.FlexEnd>
                <S.PaymentBtn
                  onClick={handleKakaoReady}
                  active={chargeAmount !== 0}
                >
                  결제하기
                </S.PaymentBtn>
              </M.FlexEnd>
            </S.ChargeBox>
            <S.OptionBoxWrapper>
              {OPTIONS.map(({ id, token, bonusToken, totalToken, krw }) => {
                return (
                  <S.OptionBox
                    key={id}
                    onClick={() => {
                      setChargeAmount(totalToken);
                      setPaymentKRW(krw);
                    }}
                    selected={totalToken === chargeAmount}
                  >
                    <S.CheckIcon selected={totalToken === chargeAmount} />
                    <S.TotalTokenUnit>
                      <S.TokenUnit gap="10px" width="100px">
                        <T.Token src={tokenImg} size="25px" />
                        <M.Text size="18px" weight="600">
                          {token.toLocaleString()}
                        </M.Text>
                      </S.TokenUnit>

                      {id !== 1 && (
                        <S.TokenUnit gap="10px">
                          <M.Text size="18px" weight="600" col="kultureGreen">
                            +
                          </M.Text>
                          <T.Token src={tokenImg} size="25px" />
                          <M.Text size="18px" weight="600" col="kultureGreen">
                            {bonusToken.toLocaleString()}
                          </M.Text>
                        </S.TokenUnit>
                      )}
                    </S.TotalTokenUnit>
                    <S.KRWUnit gap="5px" width="100px;">
                      <M.Text size="18px" weight="600">
                        {krw.toLocaleString()}
                      </M.Text>
                      <M.Text size="18px" weight="600">
                        원
                      </M.Text>
                    </S.KRWUnit>
                  </S.OptionBox>
                );
              })}
            </S.OptionBoxWrapper>
          </M.SectionWrapper>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                토큰 거래내역
              </M.Text>
            </M.SectionTitleWrapper>
            <S.HistoryBoxWrapper>
              {historyList.map(({ id, type, date, name, amount }) => {
                return (
                  <S.HistoryBox key={id}>
                    <M.Text
                      size="18px"
                      weight="600"
                      col={type === '사용' ? 'kultureGreen' : 'white'}
                    >
                      {type}
                    </M.Text>
                    <M.Text size="18px" weight="400">
                      {date}
                    </M.Text>
                    <M.Text size="18px" weight="500" width="300px">
                      {name}
                    </M.Text>
                    <M.Text
                      size="18px"
                      weight="600"
                      col={type === '사용' ? 'kultureGreen' : ''}
                    >
                      {type === '사용' ? '-' : '+'} {amount}
                    </M.Text>
                  </S.HistoryBox>
                );
              })}
            </S.HistoryBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyToken;

const OPTIONS = [
  { id: 1, token: 10, bonusToken: '', totalToken: 10, krw: 10000 },
  { id: 2, token: 100, bonusToken: 10, totalToken: 110, krw: 100000 },
  { id: 3, token: 500, bonusToken: 100, totalToken: 600, krw: 500000 },
  { id: 4, token: 1000, bonusToken: 300, totalToken: 1300, krw: 1000000 },
];
