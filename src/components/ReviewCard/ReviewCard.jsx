import React from 'react';
import { S } from './ReviewCard';

const ReviewCard = ({ src, nickname, text, deleteReview, id }) => {
  return (
    <S.Container>
      <S.ReviewImg src={src}>
        <S.DeleteBtn
          onClick={() => {
            deleteReview(id);
          }}
        />
      </S.ReviewImg>
      <S.Author>{nickname}</S.Author>
      <S.ReviewText>{text}</S.ReviewText>
    </S.Container>
  );
};

export default ReviewCard;
