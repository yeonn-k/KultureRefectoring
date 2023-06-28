import React from 'react';
import { S } from './ReviewCard';

const ReviewCard = ({ src, nickname, text, deleteReview, id, isMine }) => {
  return (
    <S.Container>
      <S.ReviewImg src={src}>
        {isMine && (
          <S.DeleteBtn
            onClick={() => {
              deleteReview(id);
            }}
          />
        )}
      </S.ReviewImg>
      <S.Author>{nickname}</S.Author>
      <S.ReviewText>{text}</S.ReviewText>
    </S.Container>
  );
};

export default ReviewCard;
