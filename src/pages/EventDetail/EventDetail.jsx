import React, { useEffect, useState } from 'react';
import { S } from './EventDetail.js';
import Chart from './Chart.jsx';
import Map from './Map.jsx';
import EventCard from '../../components/EventCard/EventCard.jsx';
import BidModal from '../../components/BidModal/BidModal.jsx';
import useGetFetch from '../../hooks/useGetFetch.js';
import OrderModal from '../../components/BidOrderModal/BidOrderModal.jsx';

const EventDetail = () => {
  const [btnText, setBtnText] = useState('기부하고 바로 구매');
  const [modalOpen, setModalOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  const [bid] = useGetFetch('/data/Graphdata.json');
  const [event] = useGetFetch('/data/DetailEventSample.json');
  const [detail] = useGetFetch('/data/DetailSample.json');

  const handleMouse = isMouseOver => {
    setBtnText(
      isMouseOver ? (
        <>
          <S.DetailToken src="./images/common/kulture-token.png" alt="token" />
          {detail?.highest_events_token}토큰
        </>
      ) : (
        '기부하고 바로 구매'
      )
    );
  };
  const MOCK_DATA = [
    {
      title: '장소',
      value: detail?.location,
    },
    {
      title: '일시',
      value: detail?.event_start_date,
    },
    {
      title: '이벤트 설명',
      value: detail?.description,
    },
    {
      title: '입찰 마감',
      value: detail?.auction_end_date,
    },
    {
      title: '남은 티켓',
      value: ` ${detail?.remaining_quantity} / ${detail?.total_quantitiy} 매`,
    },
  ];

  if (!bid?.[0]?.id) return null;

  return (
    <S.DetailContainer>
      {modalOpen && (
        <BidModal
          detail={detail}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
        />
      )}
      {orderOpen && (
        <OrderModal
          detail={detail}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
        />
      )}
      <S.DetailWrap>
        {/* 좌측 이벤트 이미지 */}
        <S.DetailLeft>
          <S.DetailMainTitle>{detail?.name}</S.DetailMainTitle>
          <S.DetailImg src={detail?.thumbnail_images_url} alt="festival" />
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
            <S.StartPrice>{detail?.start_events_token}토큰</S.StartPrice>
          </S.StartPriceWrap>
          <S.PriceWrap>
            <S.StartPrice>실시간 입찰가</S.StartPrice>
            <div>
              <S.DetailToken
                src="./images/common/kulture-token.png"
                alt="token"
              />
              <S.RealTimePrice>
                {detail?.highest_events_token}토큰
              </S.RealTimePrice>
            </div>
          </S.PriceWrap>
          <S.DetailBtnWrap>
            <S.BidingBtn onClick={() => setModalOpen(true)}>
              구매 입찰
            </S.BidingBtn>

            <S.InstantBtn
              onMouseOver={() => handleMouse(true)}
              onMouseLeave={() => handleMouse(false)}
            >
              {btnText}
            </S.InstantBtn>
          </S.DetailBtnWrap>

          <S.ChartContainer>
            <S.DetailTitle>시세</S.DetailTitle>
            <S.DetailChart>
              <Chart bid={bid} colors={{ scheme: 'nivo' }} />
            </S.DetailChart>
          </S.ChartContainer>

          <S.MapContainer>
            <S.DetailTitle>{detail?.location} 위치 확인하기</S.DetailTitle>
            <S.mapContainer>
              <Map />
            </S.mapContainer>
          </S.MapContainer>
        </S.DetailRight>
      </S.DetailWrap>

      <S.WrapperCard>
        {event.length &&
          event.map(data => {
            return <EventCard key={data.id} data={data} type="list" />;
          })}
      </S.WrapperCard>
    </S.DetailContainer>
  );
};

export default EventDetail;
