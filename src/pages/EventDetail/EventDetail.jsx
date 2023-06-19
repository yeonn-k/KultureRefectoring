import React, { useEffect, useState } from 'react';
import { S } from './EventDetail.js';
import Chart from './Chart.jsx';
import Map from './Map.jsx';
import EventCard from '../../components/EventCard/EventCard.jsx';

const EventDetail = () => {
  const [eventData, setEventData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [btnText, setBtnText] = useState('기부하고 바로 구매');
  const [bidToken, setBidToken] = useState([]);

  useEffect(() => {
    fetch('/data/Graphdata.json')
      .then(response => response.json())
      .then(result => {
        setBidToken(result);
      });
  }, []);

  useEffect(() => {
    fetch('/data/DetailEventSample.json')
      .then(response => response.json())
      .then(result => setEventData(result));
  }, []);

  useEffect(() => {
    fetch('/data/DetailSample.json')
      .then(response => response.json())
      .then(result => {
        setDetail(result[0]);
      });
  }, []);

  const handleMouse = isMouseOver => {
    setBtnText(
      isMouseOver ? (
        <>
          <S.DetailToken src="./images/common/kulture-token.png" alt="token" />
          {detail.highest_events_token}토큰
        </>
      ) : (
        '기부하고 바로 구매'
      )
    );
  };

  const MOCK_DATA = [
    {
      title: '장소',
      value: detail.location,
    },
    {
      title: '일시',
      value: detail.event_start_date,
    },
    {
      title: '이벤트 설명',
      value: detail.description,
    },
    {
      title: '입찰 마감',
      value: detail.auction_end_date,
    },
    {
      title: '남은 티켓',
      value: ` ${detail.remaining_quantity} / ${detail.total_quantitiy} 매`,
    },
  ];

  return (
    <S.DetailContainer>
      <S.DetailWrap>
        {/* 좌측 이벤트 이미지 */}
        <S.DetailLeft>
          <S.DetailMainTitle>{detail.name}</S.DetailMainTitle>
          <S.DetailImg src={detail.thumbnail_images_url} alt="festival" />
        </S.DetailLeft>
        {/* 우측 이벤트 상세 설명 */}
        <S.DetailRight>
          {MOCK_DATA.map(data => {
            return (
              <S.DetailContentsWrap key={data.title}>
                <S.DetailTitle>{data.title}</S.DetailTitle>
                <S.Detailcontents>{data.value}</S.Detailcontents>
              </S.DetailContentsWrap>
            );
          })}

          <S.StartPriceWrap>
            <S.StartPrice>입찰 시작가</S.StartPrice>
            <S.StartPrice>{detail.start_events_token}토큰</S.StartPrice>
          </S.StartPriceWrap>
          <S.PriceWrap>
            <S.StartPrice>실시간 입찰가</S.StartPrice>
            <div>
              <S.DetailToken
                src="./images/common/kulture-token.png"
                alt="token"
              />
              <S.RealTimePrice>
                {detail.highest_events_token}토큰
              </S.RealTimePrice>
            </div>
          </S.PriceWrap>
          <S.DetailBtnWrap>
            <S.BidingBtn>구매 입찰</S.BidingBtn>
            <S.InstantBtn
              onMouseOver={() => handleMouse(true)}
              onMouseLeave={() => handleMouse(false)}
            >
              {btnText}
            </S.InstantBtn>
          </S.DetailBtnWrap>

          <S.DetailTitle>시세</S.DetailTitle>
          <S.DetailChart>
            <Chart
              bidToken={bidToken}
              setBidToken={setBidToken}
              colors={{ scheme: 'nivo' }}
            />
          </S.DetailChart>

          <S.DetailTitle>지도 확인하기</S.DetailTitle>
          <S.mapContainer>
            <Map />
          </S.mapContainer>
        </S.DetailRight>
      </S.DetailWrap>

      <S.WrapperCard>
        {eventData.map(data => {
          return <EventCard key={data.id} data={data} type="list" />;
        })}
      </S.WrapperCard>
    </S.DetailContainer>
  );
};

export default EventDetail;
