import React, { useState, useEffect } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import { APIS } from '../../config';
import { S } from './Reviews';

const Reviews = () => {
  const TOKEN = localStorage.getItem('accessToken');
  const [reviewList, setReviewList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const getReview = () => {
    fetch(`${APIS.review}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data);
      });
  };

  useEffect(() => {
    if (TOKEN) {
      fetch(`${APIS.users}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken'),
        },
      })
        .then(res => res.json())
        .then(data => setUserInfo(data[0]));
    }
  }, []);

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
          {reviewList.map(({ id, image_url, nickname, content, user_id }) => {
            return (
              <ReviewCard
                key={id}
                src={image_url}
                nickname={nickname}
                text={content}
                deleteReview={deleteReview}
                id={id}
                isMine={user_id === userInfo.id}
              />
            );
          })}
        </S.ReviewCardWrapper>
      </S.ReviewCardContainer>
    </S.Container>
  );
};

export default Reviews;
