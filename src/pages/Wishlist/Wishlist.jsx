import React, { useEffect, useState } from 'react';

import EventCard from '../../components/EventCard/EventCard.jsx';

import { S } from './Wishlist';

const Wishlist = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('data/WishListCardData.json')
      .then(response => response.json())
      .then(result => setCardData(result));
  }, []);

  if (!cardData) return null;

  return (
    <div>
      <S.Container>
        <S.TitleBox>
          <S.Title>WISHLIST</S.Title>
          <S.Titlesymbol src="/images/common/kulture-symbol.png" />
        </S.TitleBox>
        <S.TitleLine />
        <S.DeleteBox>
          <S.All>전체삭제</S.All>
          <S.Select>선택삭제</S.Select>
        </S.DeleteBox>
        <S.WrapperCard>
          {cardData.map(data => {
            return <EventCard data={data} key={data.id} type="wishlist" />;
          })}
        </S.WrapperCard>
      </S.Container>
    </div>
  );
};

export default Wishlist;
