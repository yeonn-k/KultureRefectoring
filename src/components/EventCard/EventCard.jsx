import React from 'react';

import { S } from './EventCard';
import { useState } from 'react';

const EventCard = ({
  data,
  type,
  handleChecked,
  handleDeleteOne,
  checkList,
}) => {
  const {
    id,
    eventName,
    thumbnail_images_url,
    startToken,
    eventStartDate,
    locationName,
    remaining_quantity,
  } = data;

  return (
    <S.EventCard>
      <S.EventImage image={thumbnail_images_url}>
        <S.Heart
          src={
            type !== 'wishlist'
              ? '/images/common/like-false.png'
              : '/images/common/like-true.png'
          }
          // onClick={() => handleDeleteOne(id)}
        />
        {type !== 'wishlist' ? (
          ''
        ) : (
          <S.Check
            src={
              checkList.includes(id)
                ? '/images/common/check-true.png'
                : '/images/common/check-false.png'
            }
            onClick={() => handleChecked(id)}
          />
        )}
        <S.TokenBox>
          <S.Token src="/images/common/kulture-token.png" />
          <span>{startToken}토큰</span>
        </S.TokenBox>
      </S.EventImage>
      <S.EventTitle>{eventName}</S.EventTitle>
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
            <div>{''}</div>
          </S.EventTime>
          <S.EventDescription>
            <div>
              <S.EventIcon src="/images/Wishlist/Vector.png" />
              <span>남은 티켓 수</span>
            </div>
            <span>{remaining_quantity}</span>
          </S.EventDescription>
        </>
      )}
    </S.EventCard>
  );
};

export default EventCard;
