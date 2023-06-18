import React from 'react';

import { S } from './EventCard';

const EventCard = ({ data, type }) => {
  const { id, title, description, image, token, time, quantity } = data;

  return (
    <S.EventCard>
      <S.EventImage image={image}>
        <S.Heart src="/images/common/like-false.png" />
        <S.Check src="/images/common/check-false.png" />
        <S.TokenBox>
          <S.Token src="/images/common/kulture-token.png" />
          <span>{token}토큰</span>
        </S.TokenBox>
      </S.EventImage>
      <S.EventTitle>{title}</S.EventTitle>
      {type !== 'wishlist' ? (
        <S.EventDescription>{description}</S.EventDescription>
      ) : (
        <>
          <S.EventTime>
            <div>
              <S.EventIcon src="/images/Wishlist/alarm_on.png" />
              <span>입찰 마감 남은 시간</span>
            </div>
            <div>{time}</div>
          </S.EventTime>
          <S.EventDescription>
            <div>
              <S.EventIcon src="/images/Wishlist/Vector.png" />
              <span>남은 티켓 수</span>
            </div>
            <span>{quantity}</span>
          </S.EventDescription>
        </>
      )}
    </S.EventCard>
  );
};

export default EventCard;
