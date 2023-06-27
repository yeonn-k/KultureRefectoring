import React from 'react';

import Timer from './Timer/Timer.jsx';
import { S } from './EventCard';
// import Timer from '../../pages/Wishlist/components/Timer/Timer.jsx';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({
  data,
  type,
  handleChecked,
  handleDeleteOne,
  checkList,
  setId,
  wishlist,
  setWishlist,
  TOKEN,
  wishlistId,
}) => {
  const {
    event_id,
    eventName,
    thumbnail_images_url,
    startToken,
    eventStartDate,
    locationName,
    remaining_quantity,
    auction_end_date,
    start_events_token,
  } = data;

  const navigate = useNavigate();

  const goToEvent = () => {
    navigate(`/event/${event_id}`);
    window.location.href = window.location.href;
  };

  return (
    <S.EventCard>
      <S.EventImage onClick={goToEvent} image={thumbnail_images_url}>
        <S.Heart
          src={
            wishlistId?.includes(event_id)
              ? '/images/common/like-true.png'
              : '/images/common/like-false.png'
          }
          onClick={() => {
            setId(wishlist, event_id);
          }}
        />

        {type !== 'wishlist' ? (
          ''
        ) : (
          <S.Check
            src={
              checkList.includes(event_id)
                ? '/images/common/check-true.png'
                : '/images/common/check-false.png'
            }
            onClick={() => handleChecked(event_id)}
          />
        )}

        <S.TokenBox>
          <S.Token src="/images/common/kulture-token.png" />
          <span>{Number(start_events_token)}토큰</span>
        </S.TokenBox>
      </S.EventImage>
      <S.EventTitle onClick={goToEvent}>{eventName}</S.EventTitle>

      {type !== 'wishlist' ? (
        <S.EventDescription>
          <S.EventDescription>{eventStartDate}</S.EventDescription>
          <S.EventDescription>{locationName}</S.EventDescription>
        </S.EventDescription>
      ) : (
        <>
          <S.EventTime>
            <div>
              <S.EventIcon src="/images/Wishlist/alarm_on.png" />
              <span>입찰 마감 남은 시간</span>
            </div>
            <div>
              <Timer auction_end_date={auction_end_date} event_id={event_id} />
            </div>
          </S.EventTime>
          <S.WishlistEventDescription>
            <div>
              <S.EventIcon src="/images/Wishlist/Vector.png" />
              <span>남은 티켓 수</span>
            </div>
            <span>{remaining_quantity}</span>
          </S.WishlistEventDescription>
        </>
      )}
    </S.EventCard>
  );
};

export default EventCard;
