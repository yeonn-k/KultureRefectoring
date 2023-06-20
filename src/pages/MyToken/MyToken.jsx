import React, { useEffect, useState } from 'react';
import My from '../../components/My/My.jsx';
import tokenImg from '../../images/kulture-token.png';
import { M } from '../../components/My/My';
import { T } from '../../components/Token';
import { S } from './MyToken';

const MyToken = () => {
  const [chargeAmount, setChargeAmount] = useState(0);
  const [paymentKRW, setPaymentKRW] = useState(0);
  const [historyList, setHistoryList] = useState([]);

  //TokenHistory Mock Data
  useEffect(() => {
    fetch('data/tokenHistory.json')
      .then(res => res.json())
      .then(data => {
        setHistoryList(data);
      });
  }, []);

  return (
    <>
      <M.Title>My Token</M.Title>
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
                    10,000
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
                <M.CTABtn>결제하기</M.CTABtn>
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
