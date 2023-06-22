import React, { useEffect, useState } from 'react';
import EventCard from '../../../components/EventCard/EventCard.jsx';
import { BASE_URL_H, BASE_URL_K } from '../../../config';
import { S } from './Search.js';

const Search = ({ IsSearchOpen, setIsSearchOpen }) => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch(`${BASE_URL_H}/events`)
      .then(res => res.json())
      .then(data => setList(data.list));
  }, [list]);

  const listData = list.map(item => ({
    id: item.id,
    eventName: item.name,
    thumbnail_images_url: item.image_url,
    eventStartDate: item.event_start_date,
    locationName: item.location,
  }));

  const getValue = e => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searched = listData.filter(item =>
    item.eventName.toLowerCase().includes(userInput)
  );

  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.CloseSearch onClick={() => setIsSearchOpen(false)} />
        <S.InnerWrapper>
          <S.SearchBar
            onChange={getValue}
            value={userInput}
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <S.SearchIcon />
        </S.InnerWrapper>
        <S.ListWrap>
          {userInput &&
            searched.map(data => {
              return <EventCard key={data.id} data={data} type="list" />;
            })}
        </S.ListWrap>
      </S.SearchWrapper>
    </S.SearchContainer>
  );
};

export default Search;
