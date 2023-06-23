import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import My from '../../components/My/My.jsx';
import { APIS } from '../../config.js';
import tokenImg from '../../images/kulture-token.png';
import learnMoreIcon from '../../images/learn-more.png';
import { M } from '../../components/My/My';
import { T } from '../../components/Token';
import { S } from './MyDashboard';

const MyDashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [orderList, setOrderList] = useState([]);
  const [bidList, setBidList] = useState([]);

  const handleMakeOrder = (bidId, event_id, bidding_events_token, quantity) => {
    const bidData = {
      bidId: bidId,
      eventId: event_id,
      quantity: quantity,
      totalEventToken: bidding_events_token * quantity,
    };

    if (event_token < bidData.totalEventToken) {
      alert('토큰이 부족해요!');
      return;
    }
    fetch(`${APIS.order}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify(bidData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'ORDER_COMPLETED') {
          window.location.reload();
          alert('구매가 완료되었어요!');
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
      .then(data => {
        setUserInfo(data[0]);
      });
  }, []);

  //userInfo Mock Data
  // useEffect(() => {
  //   fetch('data/userInfo.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserInfo(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${APIS.order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrderList(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${APIS.bid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setBidList(data);
      });
  }, []);

  //bid Mock Data
  // useEffect(() => {
  //   fetch('data/bidList.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setBidList(data);
  //     });
  // }, []);

  const { event_token } = userInfo;
  const bidPending = bidList.filter(
    obj => obj.bid_status_code === 'BID_PENDING'
  );
  const bidWinning = bidList.filter(
    obj => obj.bid_status_code === 'BID_WINNING'
  );
  const bidWinningValid = bidWinning.filter(obj => {
    const startDate = new Date(obj.event_start_date);
    return startDate > new Date();
  });

  const bidAccepted = bidList.filter(
    obj => obj.bid_status_code === 'BID_ACCEPTED'
  );
  const bidLosing = bidList.filter(obj => obj.event_start_date > new Date());

  const donation = () => {
    const payments = orderList.map(item => item.total_event_token);
    let sum = 0;
    payments.forEach(num => {
      sum += Math.floor(num);
    });
    return sum * 0.1 * 1000;
  };

  return (
    <>
      <M.Title>대시보드</M.Title>

      <M.Container>
        <My />

        <M.MainContainer>
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
                    {Math.floor(event_token).toLocaleString()}
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
                <M.Text size="20px" weight="600">
                  지금까지
                </M.Text>
                <M.Text size="35px" weight="600">
                  {donation().toLocaleString()}
                </M.Text>
                <M.Text size="20px" weight="600">
                  원 기부했어요
                </M.Text>
              </S.DonationBox>
            </M.SectionWrapper>
          </S.TokenDonationWrapper>
          <M.SectionWrapper>
            <M.SectionTitleWrapper>
              <M.Text size="22px" weight="600">
                내 입찰내역
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
                    {bidPending.length}
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
                    {bidWinning.length + bidAccepted.length}
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
                    {bidLosing.length}
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
            <S.BidBoxWrapper>
              {bidWinningValid.length === 0 ? (
                <M.EmptyBox>낙찰 수락 대기중인 이벤트가 없어요!</M.EmptyBox>
              ) : (
                bidWinningValid.map(
                  ({
                    bidId,
                    name,
                    location,
                    event_start_date,
                    quantity,
                    event_id,
                    bid_status_code,
                    bidding_events_token,
                  }) => {
                    if (bid_status_code !== 'BID_WINNING') {
                      return null;
                    } else
                      return (
                        <S.BidBox key={bidId}>
                          <M.Text size="18px" weight="500" width="250px;">
                            {name} ・ {quantity}매
                          </M.Text>
                          <M.Text size="16px" weight="400" width="300px">
                            {event_start_date} ・ {location}
                          </M.Text>

                          <S.TokenUnit gap="5px" width="80px">
                            <T.Token src={tokenImg} size="20px" />
                            <M.Text size="18px" weight="600">
                              {(
                                quantity * bidding_events_token
                              ).toLocaleString()}
                            </M.Text>
                          </S.TokenUnit>

                          <M.CTABtn
                            onClick={() => {
                              handleMakeOrder(
                                bidId,
                                event_id,
                                bidding_events_token,
                                quantity
                              );
                            }}
                          >
                            구매 확정하기
                          </M.CTABtn>
                        </S.BidBox>
                      );
                  }
                )
              )}
            </S.BidBoxWrapper>
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyDashboard;
