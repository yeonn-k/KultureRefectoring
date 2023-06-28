import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard/EventCard.jsx';
import fetchLiked from '../../hooks/fetchLiked.js';
import { APIS } from '../../config.js';
import { S } from './Home';

const Home = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('accessToken');
  const [checkLiked, setCheckLiked] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cardData, setCardData] = useState([]);
  const setId = (data, event_id) => {
    setCheckLiked(
      fetchLiked(TOKEN, APIS.wishlist, data, event_id, setWishlist, getWishList)
    );
  };

  const wishlistId = wishlist?.map(({ event_id }) => event_id);

  const getWishList = () => {
    const url = `${APIS.wishlist}`;
    if (TOKEN) {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: TOKEN,
        },
      })
        .then(response => response.json())
        .then(result => {
          setWishlist(result.wishlist);
        });
    }
  };

  useEffect(() => {
    fetch('data/homeEventCard.json')
      .then(res => res.json())
      .then(data => {
        setCardData(data);
      });
  }, []);

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <>
      <S.Banner src="./images/Home/banner-main.jpg" ratio="2/1">
        <S.TextMain>Kindness + Culture</S.TextMain>
      </S.Banner>
      <S.SectionWrapper>
        <S.SectionTitle>카테고리</S.SectionTitle>
        <S.BoxWrapper>
          {CATEGORIES.map(({ id, title, src }) => {
            return (
              <S.CategoryBox
                key={id}
                src={src}
                alt={title}
                onClick={() => {
                  navigate(`/events?&categoryId=${id}`);
                }}
              >
                <S.CategoryText key={id}>{title}</S.CategoryText>
              </S.CategoryBox>
            );
          })}
        </S.BoxWrapper>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.SectionTitle>지금 인기있는 이벤트</S.SectionTitle>
        <S.BoxWrapper>
          {cardData.map(data => {
            return (
              <EventCard
                key={data.event_id}
                data={data}
                setId={setId}
                wishlistId={wishlistId}
                wishlist={wishlist}
                type="home"
              />
            );
          })}
        </S.BoxWrapper>
      </S.SectionWrapper>
      <S.Banner src="./images/Home/banner-sub.jpg" ratio="3/1">
        <S.TextSub size="45px">누구나 문화예술을 즐길 수 있도록.</S.TextSub>
        <S.TextSub size="18px">
          *구매한 티켓 금액의 10%는 저소득층 대상 문화생활 지원사업에
          기부됩니다.
        </S.TextSub>
      </S.Banner>
    </>
  );
};

export default Home;

const CATEGORIES = [
  { id: 1, title: '페스티벌', src: './images/Home/category-festival.jpg' },
  { id: 2, title: '콘서트', src: './images/Home/category-concert.jpg' },
  { id: 3, title: '퍼포먼스', src: './images/Home/category-performance.jpg' },
  { id: 4, title: '클래식', src: './images/Home/category-classical.jpg' },
];
