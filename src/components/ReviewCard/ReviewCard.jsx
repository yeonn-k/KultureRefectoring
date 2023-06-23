import React from 'react';
import { S } from './ReviewCard';

const ReviewCard = ({ src, nickname, text }) => {
  return (
    <S.Container>
      <S.ReviewImg src={src}>
        <S.DeleteBtn />
      </S.ReviewImg>
      <S.Author>{nickname}</S.Author>
      <S.ReviewText>{text}</S.ReviewText>
    </S.Container>
  );
};

export default ReviewCard;
