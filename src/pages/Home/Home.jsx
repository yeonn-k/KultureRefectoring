import React from 'react';
import { S } from './Home';

const Home = () => {
  return (
    <>
      <S.Banner src="./images/Home/banner-main.jpg" ratio="2/1">
        <S.TextMain>Value Proposition</S.TextMain>
      </S.Banner>
      <S.SectionWrapper>
        <S.SectionTitle>카테고리</S.SectionTitle>
        <S.BoxWrapper>
          {CATEGORIES.map(({ id, title, src }) => {
            return (
              <S.CategoryBox key={id} src={src} alt={title}>
                <S.CategoryText key={id}>{title}</S.CategoryText>
              </S.CategoryBox>
            );
          })}
        </S.BoxWrapper>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.SectionTitle>지금 인기있는 이벤트</S.SectionTitle>
      </S.SectionWrapper>
      <S.Banner src="./images/Home/banner-sub.jpg" ratio="3/1">
        <S.TextSub>Donation</S.TextSub>
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
