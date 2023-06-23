import React, { useEffect, useState } from 'react';
import { S } from './Reviews';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetch('data/reviews.json')
      .then(res => res.json())
      .then(data => {
        setReviewList(data);
      });
  }, []);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleSymbol src="/images/common/kulture-symbol.png" />
        <S.Title>REVIEWS</S.Title>
      </S.TitleWrapper>

      <S.ReviewCardContainer>
        <S.ReviewCardWrapper>
          {reviewList.map(({ id, src, nickname, text }) => {
            return (
              <ReviewCard key={id} src={src} nickname={nickname} text={text} />
            );
          })}
        </S.ReviewCardWrapper>
      </S.ReviewCardContainer>
    </S.Container>
  );
};

export default Reviews;
