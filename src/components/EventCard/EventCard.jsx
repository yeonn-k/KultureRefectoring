import React from 'react';

import { S } from './EventCard';
import { useState } from 'react';

const EventCard = ({
  data,
  type,
  cardData,
  setCardData,
  handleChecked,

  checkList,
}) => {
  const { id, title, description, image, token, time, quantity } = data;
  const [isLiked, setIsLiked] = useState(false);

  const handleDeleteOne = () => {
    setIsLiked(true);
    setCardData(cardData.filter(el => el.id !== id));
  };

  return (
    <S.EventCard>
      <S.EventImage image={image}>
        <S.Heart
          src={
            type !== 'wishlist'
              ? '/images/common/like-false.png'
              : '/images/common/like-true.png'
          }
          onClick={handleDeleteOne}
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
