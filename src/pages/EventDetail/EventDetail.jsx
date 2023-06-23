import React, { useEffect, useState } from 'react';
import Chart from './Chart.jsx';
import Map from './Map.jsx';
import EventCard from '../../components/EventCard/EventCard.jsx';
import BidModal from '../../components/BidModal/BidModal.jsx';
import BidOrderModal from '../../components/BidOrderModal/BidOrderModal.jsx';
import DirectBidModal from '../../components/DirectBidModal/DirectBidModal.jsx';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import { BASE_URL_H, BASE_URL_K } from '../../config';
import { S } from './EventDetail.js';

const EventDetail = () => {
  const [btnText, setBtnText] = useState('기부하고 바로 구매');
  const [modalOpen, setModalOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [coast, setCoast] = useState(0);
  const [ticket, setTicket] = useState(1);
  const [eventList, setEventList] = useState({});
  const [detail, setDetail] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [bidToken, setBidToken] = useState([]);
  const [totalToken, setTotalToken] = useState(0);
  const [directOrderOpen, setDirectOrderOpen] = useState(false);
  const [directBidOpen, setDirectBidOpen] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [isDirect, setIsDirect] = useState(false);

  const userToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjg3MzQ4OTQyLCJleHAiOjE2ODgxMjY1NDJ9.f_pAeolhoGvPe1df13KLRbQGN7AwHbSPrEXge9yB-4s';

  localStorage.setItem('userToken', userToken);

  //카드 정보 GET
  useEffect(() => {
    fetch(`${BASE_URL_K}/events`)
      .then(res => res.json())
      .then(data => {
        return setEventList(data.data);
      });
  }, []);

  //상세 정보 GET
  useEffect(() => {
    fetch(`${BASE_URL_K}/events/1`)
      .then(res => res.json())
      .then(data => {
        setDetail(data[0]);
        setBidToken(data[0].data);
      });
  }, []);

  // 리뷰 정보 GET
  useEffect(() => {
    fetch(`${BASE_URL_K}/review/1`)
      .then(res => res.json())
      .then(data => {
        return setReviewList(data);
      });
  }, []);

  //유저 정보 GET
  useEffect(() => {
    fetch(`${BASE_URL_K}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data[0]);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const listData = reviewList.map(item => ({
    id: item.id,
    eventName: item.name,
    thumbnail_images_url: item.image_url,
    eventStartDate: item.event_start_date,
    locationName: item.location,
  }));

  const { event_token, email, nickname } = userInfo;

  const chartBidData = [
    {
      id: 'TOKEN',
      data: bidToken,
    },
  ];

  //그래프 x축 변경
  const startDate = new Date(detail?.event_start_date);
  const endDate = new Date(detail?.auction_end_date);
  const formatDateTime = date => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const period = hour < 12 ? 'AM' : 'PM';

    return `${year}-${month}-${day} ${hour}:${minute} ${period}`;
  };

  const startTime = formatDateTime(startDate);
  const endTime = formatDateTime(endDate);

  const handleMouse = isMouseOver => {
    setBtnText(
      isMouseOver ? (
        <>
          <S.DetailToken src="./images/common/kulture-token.png" alt="token" />
          {detail?.highestToken}토큰
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
      value: startTime,
    },
    {
      title: '이벤트 설명',
      value: detail?.description,
    },
    {
      title: '입찰 마감',
      value: endTime,
    },
    {
      title: '남은 티켓',
      value: ` ${detail?.remaining_quantity} / ${detail?.total_quantity} 매`,
    },
  ];
  // if (!bid?.[0]?.id) return null;

  return (
    <S.DetailContainer>
      {modalOpen && (
        <BidModal
          detail={detail}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
          event_token={event_token}
          coast={coast}
          setCoast={setCoast}
          ticket={ticket}
          setTicket={setTicket}
          isDirect={isDirect}
          setIsDirect={setIsDirect}
        />
      )}
      {orderOpen && (
        <BidOrderModal
          detail={detail}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
          nickname={nickname}
          email={email}
          coast={coast}
          totalToken={totalToken}
          setTotalToken={setTotalToken}
          ticket={ticket}
          setTicket={setTicket}
          setModalOpen={setModalOpen}
          setCoast={setCoast}
          isDirect={isDirect}
          setIsDirect={setIsDirect}
        />
      )}
      {directBidOpen && (
        <DirectBidModal
          detail={detail}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
          event_token={event_token}
          coast={coast}
          setCoast={setCoast}
          ticket={ticket}
          setTicket={setTicket}
          directOrderOpen={directOrderOpen}
          setDirectOrderOpen={setDirectOrderOpen}
          directBidOpen={directBidOpen}
          setDirectBidOpen={setDirectBidOpen}
          isDirect={isDirect}
          setIsDirect={setIsDirect}
        />
      )}
      {directOrderOpen && (
        <DirectOrderModal
          detail={detail}
          orderOpen={orderOpen}
          setOrderOpen={setOrderOpen}
          nickname={nickname}
          email={email}
          coast={coast}
          totalToken={totalToken}
          setTotalToken={setTotalToken}
          ticket={ticket}
          setTicket={setTicket}
          setModalOpen={setModalOpen}
          setCoast={setCoast}
          directOrderOpen={directOrderOpen}
          setDirectOrderOpen={setDirectOrderOpen}
          directBidOpen={directBidOpen}
          setDirectBidOpen={setDirectBidOpen}
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
            <S.StartPrice>{detail?.startToken}토큰</S.StartPrice>
          </S.StartPriceWrap>
          <S.PriceWrap>
            <S.StartPrice>실시간 입찰가</S.StartPrice>
            <div>
              <S.DetailToken
                src="./images/common/kulture-token.png"
                alt="token"
              />
              <S.RealTimePrice>
                {bidToken.length > 0
                  ? bidToken[bidToken.length - 2].y + '토큰'
                  : ''}
              </S.RealTimePrice>
            </div>
          </S.PriceWrap>
          <S.DetailBtnWrap>
            <S.BidingBtn onClick={() => setModalOpen(true)}>
              구매 입찰
            </S.BidingBtn>

            <S.InstantBtn
              onClick={() => setDirectBidOpen(true)}
              onMouseOver={() => handleMouse(true)}
              onMouseLeave={() => handleMouse(false)}
            >
              {btnText}
            </S.InstantBtn>
          </S.DetailBtnWrap>

          <S.ChartContainer>
            <S.DetailTitle>시세</S.DetailTitle>

            <S.DetailChart>
              <Chart bid={chartBidData} colors={{ scheme: 'nivo' }} />
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

      <S.RecommnedWrap>
        <S.RecommnedTitle>당신이 좋아할만한 이벤트</S.RecommnedTitle>
        <S.WrapperCard>
          {eventList.length &&
            eventList.map(data => {
              return <EventCard key={data.id} data={data} type="list" />;
            })}
        </S.WrapperCard>
      </S.RecommnedWrap>
      <S.ReviewWrapper>
        <S.RecommnedTitle>리뷰</S.RecommnedTitle>
        {listData.map(event => {
          return (
            <ReviewCard
              key={event.id}
              id={event.id}
              thumbnail={event.thumbnail_images_url}
              title={event.name}
              location={event.location}
              startDate={event.event_start_date}
              endDate={event.auction_end_date}
            />
          );
        })}
      </S.ReviewWrapper>
    </S.DetailContainer>
  );
};

export default EventDetail;
