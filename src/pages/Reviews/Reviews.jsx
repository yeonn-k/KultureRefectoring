import React, { useState, useEffect } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import { APIS } from '../../config';
import { S } from './Reviews';

const Reviews = () => {
  const TOKEN = localStorage.getItem('accessToken');
  const [reviewList, setReviewList] = useState([]);

  const getReview = () => {
    fetch(`${APIS.review}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  const deleteReview = id => {
    fetch(`${APIS.review}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
    }).then(response => {
      if (response.ok) {
        setReviewList(prevReviewList =>
          prevReviewList.filter(review => review.id !== id)
        );
      }
    });
  };

  //Review Mock Data
  // useEffect(() => {
  //   fetch('data/reviews.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setReviewList(data);
  //     });
  // }, []);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleSymbol src="/images/common/kulture-symbol.png" />
        <S.Title>REVIEWS</S.Title>
      </S.TitleWrapper>

      <S.ReviewCardContainer>
        <S.ReviewCardWrapper>
          {reviewList.map(({ id, image_url, nickname, content }) => {
            return (
              <ReviewCard
                key={id}
                src={image_url}
                nickname={nickname}
                text={content}
                deleteReview={deleteReview}
                id={id}
              />
            );
          })}
        </S.ReviewCardWrapper>
      </S.ReviewCardContainer>
    </S.Container>
  );
};

export default Reviews;
