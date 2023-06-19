import React from 'react';
import EventCard from '../../components/EventCard/EventCard.jsx';
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
        <S.BoxWrapper>
          {EVENTS.map(data => {
            return <EventCard type="home" key={data.id} data={data} />;
          })}
        </S.BoxWrapper>
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

const EVENTS = [
  {
    id: 37,
    title: 'Electric Picnic',
    image:
      'https://github.com/HaeJungg/project-image/blob/master/p2-Images/Festival/festival-37.jpg?raw=true',
    token: 100,
    description: 'Jul 02, 2023',

    location: '컨벤션',
  },
  {
    id: 55,
    title: 'The Beautiful Trauma World Tour',
    image:
      'https://github.com/HaeJungg/project-image/blob/master/p2-Images/Concert/concert-15.jpg?raw=true',
    token: 150,
    description: 'Jul 16, 2023',
    location: '고척 스카이돔',
  },
  {
    id: 78,
    title: 'Cinderella',
    image:
      'https://github.com/HaeJungg/project-image/blob/master/p2-Images/Performance/performance-18.jpg?raw=true',
    token: 200,
    description: 'Jul 23, 2023',
    location: '오페라하우스',
  },
];
