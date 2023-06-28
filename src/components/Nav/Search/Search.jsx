import React, { useEffect, useState } from 'react';
import EventCard from '../../../components/EventCard/EventCard.jsx';
import { APIS } from '../../../config';
import { S } from './Search.js';

const Search = ({ IsSearchOpen, setIsSearchOpen }) => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [offset, setOffset] = useState(0);

  const LIMIT = 50;
  const nextOffset = LIMIT + offset;

  const getValue = e => {
    setUserInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch(`${APIS.events}?limit=${LIMIT}&offset=${nextOffset - 50}`)
      .then(res => res.json())
      .then(data => {
        setList(data.data);
      });
  }, []);

  const searched =
    list &&
    list.filter(item => item.eventName?.toLowerCase().includes(userInput));

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
          <S.ListBox>
            {userInput &&
              list &&
              searched.map(data => {
                return (
                  <EventCard key={data.event_id} data={data} type="list" />
                );
              })}
          </S.ListBox>
        </S.ListWrap>
      </S.SearchWrapper>
    </S.SearchContainer>
  );
};

export default Search;
