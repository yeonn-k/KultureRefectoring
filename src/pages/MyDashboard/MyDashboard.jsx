import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import My from '../../components/My/My.jsx';
import tokenImg from '../../images/kulture-token.png';
import learnMoreIcon from '../../images/learn-more.png';
import { M } from '../../components/My/My';
import { T } from '../../components/Token';
import { S } from './MyDashboard';

const MyDashboard = () => {
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState([]);
  const [successList, setSuccessList] = useState([]);

  //ticketList Mock Data
  useEffect(() => {
    fetch('data/ticketList.json')
      .then(res => res.json())
      .then(data => {
        setTicketList(data.list);
      });
  }, []);

  //biddingSuccessful Mock Data
  useEffect(() => {
    fetch('data/biddingSuccessful.json')
      .then(res => res.json())
      .then(data => {
        setSuccessList(data);
      });
  }, []);

  console.log(successList);

  return (
    <>
      <M.Title>My Dashboard</M.Title>

      <M.Container>
        <My />

        <M.MainContainer>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                내 입찰 현황
              </M.Text>
              <M.LearnMoreBtn
                src={learnMoreIcon}
                onClick={() => navigate('/auction')}
              />
            </M.SectionTitleWrapper>
            <S.AuctionBoxWrapper>
              <S.AuctionBoxIP>
                <S.StatusBox>
                  <M.Text size="16px" weight="500">
                    입찰 진행 중
                  </M.Text>
                  <S.AuctionIP />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text size="70px" weight="600">
                    8
                  </M.Text>
                  <M.Text size="20px" weight="500">
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxIP>
              <S.AuctionBoxDone>
                <S.StatusBox>
                  <M.Text size="16px" weight="500" col="kultureGreen">
                    낙찰 성공
                  </M.Text>
                  <S.AuctionDone />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text size="70px" weight="600" col="kultureGreen">
                    17
                  </M.Text>
                  <M.Text size="20px" weight="500" col="kultureGreen">
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxDone>
              <S.AuctionBoxFail>
                <S.StatusBox>
                  <M.Text size="16px" weight="500" col="lightGrey">
                    낙찰 실패
                  </M.Text>
                  <S.AuctionFail />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text size="70px" weight="600" col="lightGrey">
                    2
                  </M.Text>
                  <M.Text size="20px" weight="500" col="lightGrey">
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxFail>
            </S.AuctionBoxWrapper>
          </M.SectionWrapper>

          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                낙찰 수락 대기
              </M.Text>
            </M.SectionTitleWrapper>
            <S.SuccessBoxWrapper>
              {successList.length === 0 ? (
                <S.EmptyBox>낙찰 수락 대기중인 이벤트가 없어요!</S.EmptyBox>
              ) : (
                successList.map(({ id, title, date, location, price }) => {
                  return (
                    <S.SuccessBox key={id}>
                      <M.Text size="18px" weight="500" width="220px;">
                        {title}
                      </M.Text>
                      <M.Text size="16px" weight="400" width="300px">
                        {date} ・ {location}
                      </M.Text>

                      <S.TokenUnit gap="5px" width="80px">
                        <T.Token src={tokenImg} size="20px" />
                        <M.Text size="18px" weight="600">
                          {price.toLocaleString()}
                        </M.Text>
                      </S.TokenUnit>

                      <M.CTABtn>구매 확정하기</M.CTABtn>
                    </S.SuccessBox>
                  );
                })
              )}
            </S.SuccessBoxWrapper>
          </M.SectionWrapper>

          <S.TokenDonationWrapper>
            <M.SectionWrapper>
              <M.SectionTitleWrapper>
                <M.Text size="22px" weight="600">
                  내 토큰
                </M.Text>
                <M.LearnMoreBtn
                  src={learnMoreIcon}
                  onClick={() => navigate('/token')}
                />
              </M.SectionTitleWrapper>
              <S.TokenBox>
                <S.TokenUnit gap="25px">
                  <T.Token src={tokenImg} size="60px" />
                  <M.Text size="50px" weight="600">
                    10,000
                  </M.Text>
                </S.TokenUnit>
                <M.CTABtn onClick={() => navigate('/token')}>
                  충전하러 가기
                </M.CTABtn>
              </S.TokenBox>
            </M.SectionWrapper>

            <M.SectionWrapper>
              <M.SectionTitleWrapper>
                <M.Text size="22px" weight="600">
                  내 기부액
                </M.Text>
              </M.SectionTitleWrapper>
              <S.DonationBox>
                <M.Text size="35px" weight="600">
                  200,000
                </M.Text>
                <M.Text size="20px" weight="600">
                  원 기부했어요!
                </M.Text>
              </S.DonationBox>
            </M.SectionWrapper>
          </S.TokenDonationWrapper>

          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                내 티켓
              </M.Text>
            </M.SectionTitleWrapper>

            <S.TicketBoxWrapper>
              {ticketList.length === 0 ? (
                <S.EmptyBox>유효한 티켓이 없어요!</S.EmptyBox>
              ) : (
                ticketList.map(
                  ({ id, name, image_url, location, event_start_date }) => {
                    return (
                      <S.TicketBox key={id}>
                        <S.TicketImage src={image_url} />
                        <S.TicketInfo>
                          <M.Text size="22px" weight="500">
                            {name}
                          </M.Text>
                          <M.Text size="16px" weight="400">
                            {event_start_date} ・ {location}
                          </M.Text>
                        </S.TicketInfo>
                        <M.CTABtn>티켓 확인하기</M.CTABtn>
                      </S.TicketBox>
                    );
                  }
                )
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyDashboard;
