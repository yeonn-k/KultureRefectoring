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

  //ticketList Mock Data
  useEffect(() => {
    fetch('data/ticketList.json')
      .then(res => res.json())
      .then(data => {
        setTicketList(data.list);
      });
  }, []);

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
                  <M.Text size="18px" weight="500">
                    입찰 진행 중
                  </M.Text>
                  <S.AuctionIP />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text size="100px" weight="600">
                    8
                  </M.Text>
                  <M.Text size="20px" weight="500">
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxIP>
              <S.AuctionBoxDone>
                <S.StatusBox>
                  <M.Text
                    size="18px"
                    weight="500"
                    col={props => props.theme.kultureGreen}
                  >
                    낙찰 성공
                  </M.Text>
                  <S.AuctionDone />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text
                    size="100px"
                    weight="600"
                    col={props => props.theme.kultureGreen}
                  >
                    17
                  </M.Text>
                  <M.Text
                    size="20px"
                    weight="500"
                    col={props => props.theme.kultureGreen}
                  >
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxDone>
              <S.AuctionBoxFail>
                <S.StatusBox>
                  <M.Text
                    size="18px"
                    weight="500"
                    col={props => props.theme.lightGrey}
                  >
                    낙찰 실패
                  </M.Text>
                  <S.AuctionFail />
                </S.StatusBox>
                <S.TextUnit>
                  <M.Text
                    size="100px"
                    weight="600"
                    col={props => props.theme.lightGrey}
                  >
                    2
                  </M.Text>
                  <M.Text
                    size="20px"
                    weight="500"
                    col={props => props.theme.lightGrey}
                  >
                    건
                  </M.Text>
                </S.TextUnit>
              </S.AuctionBoxFail>
            </S.AuctionBoxWrapper>
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
                <M.CTABtn>충전하러 가기</M.CTABtn>
              </S.TokenBox>
            </M.SectionWrapper>

            <M.SectionWrapper>
              <M.Text size="22px" weight="600">
                내 기부액
              </M.Text>
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
            <M.Text size="22px" weight="600">
              내 티켓
            </M.Text>
            <S.TicketBoxWrapper>
              {ticketList.map(
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
              )}
            </S.TicketBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyDashboard;
