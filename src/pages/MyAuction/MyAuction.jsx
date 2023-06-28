import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import My from '../../components/My/My.jsx';
import tokenImg from '../../images/kulture-token.png';
import { APIS } from '../../config.js';
import { M } from '../../components/My/My';
import { T } from '../../components/Token.js';
import { S } from './MyAuction';

const MyAuction = () => {
  const [isIP, setIsIP] = useState(true);
  const [bidList, setBidList] = useState([]);

  const navigate = useNavigate();

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

  // bidList Mock Data
  // useEffect(() => {
  //   fetch('data/bidList.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setBidList(data);
  //     });
  // }, []);

  const bidPending = bidList.filter(
    obj => obj.bid_status_code === 'BID_PENDING'
  );
  const bidEnded = bidList.filter(obj => obj.bid_status_code !== 'BID_PENDING');

  return (
    <>
      <M.Title>내 입찰내역</M.Title>

      <M.Container>
        <My />
        <M.MainContainer>
          <M.SectionWrapper>
            <S.StatusWrapper>
              <S.Status
                selected={isIP}
                onClick={() => {
                  setIsIP(!isIP);
                }}
              >
                입찰 진행 중
              </S.Status>
              <S.Status
                selected={!isIP}
                onClick={() => {
                  setIsIP(!isIP);
                }}
              >
                종료
              </S.Status>
            </S.StatusWrapper>
            {isIP ? (
              <>
                <S.KeyWrapper gap="83px">
                  {IP_KEYS.map(({ id, title }) => {
                    return <S.DataKey key={id}>{title}</S.DataKey>;
                  })}
                </S.KeyWrapper>
                <S.HistoryBoxWrapper>
                  {bidPending.length === 0 ? (
                    <M.EmptyBox>입찰 진행 중인 이벤트가 없어요!</M.EmptyBox>
                  ) : (
                    bidPending.map(
                      ({
                        bidId,
                        name,
                        location,
                        event_start_date,
                        Image_url,
                        auction_end_date,
                        quantity,
                        bid_status_code,
                        bidding_events_token,
                        event_id,
                      }) => {
                        return (
                          <S.HistoryBox key={bidId}>
                            <S.EventImg
                              onClick={() => navigate(`/event/${event_id}`)}
                              src={Image_url}
                            />
                            <S.EventInfoUnit>
                              <S.EventName
                                onClick={() => navigate(`/event/${event_id}`)}
                              >
                                {name}
                              </S.EventName>
                              <S.DateLocation>
                                {location} ・ {event_start_date}
                              </S.DateLocation>
                            </S.EventInfoUnit>
                            <S.Quantity>{quantity}</S.Quantity>
                            <S.TokenUnit gap="5px" width="100px">
                              <T.Token src={tokenImg} size="20px" />
                              <M.Text size="18px" weight="600">
                                {(
                                  quantity * bidding_events_token
                                ).toLocaleString()}
                              </M.Text>
                            </S.TokenUnit>
                            <S.EndDate>{auction_end_date}</S.EndDate>
                          </S.HistoryBox>
                        );
                      }
                    )
                  )}
                </S.HistoryBoxWrapper>
              </>
            ) : (
              <>
                <S.KeyWrapper gap="53px">
                  {ENDED_KEYS.map(({ id, title }) => {
                    return <S.DataKey key={id}>{title}</S.DataKey>;
                  })}
                </S.KeyWrapper>
                <S.HistoryBoxWrapper>
                  {bidEnded.length === 0 ? (
                    <M.EmptyBox>입찰이 종료된 이벤트가 없어요!</M.EmptyBox>
                  ) : (
                    bidEnded.map(
                      ({
                        bidId,
                        name,
                        location,
                        event_start_date,
                        Image_url,
                        auction_end_date,
                        quantity,
                        bid_status_code,
                        bidding_events_token,
                        event_id,
                      }) => {
                        return (
                          <S.HistoryBox key={bidId}>
                            <S.EventImg
                              onClick={() => navigate(`/event/${event_id}`)}
                              src={Image_url}
                            />
                            <S.EventInfoUnit>
                              <S.EventName
                                onClick={() => navigate(`/event/${event_id}`)}
                              >
                                {name}
                              </S.EventName>
                              <S.DateLocation>
                                {location} ・ {event_start_date}
                              </S.DateLocation>
                            </S.EventInfoUnit>
                            <S.Quantity>{quantity}</S.Quantity>
                            <S.TokenUnit gap="5px" width="100px">
                              <T.Token src={tokenImg} size="20px" />
                              <M.Text size="18px" weight="600">
                                {(
                                  quantity * bidding_events_token
                                ).toLocaleString()}
                              </M.Text>
                            </S.TokenUnit>
                            <S.EndDate>{auction_end_date}</S.EndDate>
                            <S.BidResult
                              success={bid_status_code !== 'BID_LOSING'}
                            >
                              {bid_status_code !== 'BID_LOSING'
                                ? '성공'
                                : '실패'}
                            </S.BidResult>
                          </S.HistoryBox>
                        );
                      }
                    )
                  )}
                </S.HistoryBoxWrapper>
              </>
            )}
          </M.SectionWrapper>
        </M.MainContainer>
      </M.Container>
    </>
  );
};

export default MyAuction;

const IP_KEYS = [
  { id: 1, title: '입찰 매수' },
  { id: 2, title: '입찰 총액' },
  { id: 3, title: '경매 종료일' },
];

const ENDED_KEYS = [
  { id: 1, title: '입찰 매수' },
  { id: 2, title: '입찰 총액' },
  { id: 3, title: '경매 종료일' },
  { id: 4, title: '낙찰 여부' },
];
