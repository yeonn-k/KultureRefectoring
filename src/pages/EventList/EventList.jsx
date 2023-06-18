import React, { useEffect, useState } from 'react';

import EventCard from '../../components/EventCard/EventCard.jsx';
import Category from './Category/Category.jsx';

import { S } from './EventList.js';

const EventList = () => {
  const [cardData, setCardData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch('/data/eventCardData.json')
      .then(response => response.json())
      .then(result => setCardData(result));
  }, []);

  useEffect(() => {
    fetch('data/eventCategoryData.json')
      .then(response => response.json())
      .then(result => setCategoryData(result));
  }, []);

  if (!cardData) return null;

  return (
    <div>
      <S.Container>
        <S.ContainerLeft>
          <S.Calender></S.Calender>
          {categoryData.map(data => {
            return <Category data={data} key={data.id} />;
          })}
          <S.TokenBox />
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.TitleBox>
            <S.Title>EVENT</S.Title>
            <S.Titlesymbol src="/images/common/kulture-symbol.png" />
          </S.TitleBox>
          <S.TitleLine />
          <S.FilterBox>
            <S.FilterIcon />
            <S.Filter>인기순</S.Filter>
          </S.FilterBox>
          <S.WrapperCard>
            {cardData.map(data => {
              return <EventCard key={data.id} data={data} type="list" />;
            })}
          </S.WrapperCard>
        </S.ContainerRight>
      </S.Container>
      <S.More>
        <S.MoreLine />
        <S.MoreText>더보기</S.MoreText>
      </S.More>
    </div>
  );
};

export default EventList;
