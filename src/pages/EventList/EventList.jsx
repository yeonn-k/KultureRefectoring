import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Calendar from 'react-calendar';

import EventCard from '../../components/EventCard/EventCard.jsx';
import Category from './components/Category/Category.jsx';
import DropBox from './components/DropBox/DropBox.jsx';
import fetchLiked from '../../hooks/fetchLiked.js';

import { PriceRangeFilter } from './PriceRangeFilter.jsx';

import { S } from './EventList.js';

import { CalenderBox } from './CalendarBox.js';
import { APIS } from '../../config.js';
import GoToTop from '../../components/GoToTop/GoToTop.jsx';

const EventList = () => {
  const TOKEN = localStorage.getItem('accessToken');

  const [cardData, setCardData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistId, setWishlistId] = useState([]);

  const [categoryData, setCategoryData] = useState([]);
  const [userDate, setUserDate] = useState(new Date());
  const [isInSearchParams, setIsInSearchParams] = useState([]);
  const [checkLiked, setCheckLiked] = useState([]);

  const [categoryState, setCategoryState] = useState('');
  const [isOpenDropBox, setIsOpenDropBox] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams([]);
  const [value, setValue] = useState([0, 300]);

  const location = useLocation();

  let offset = searchParams.get('offset');
  let limit = searchParams.get('limit');

  let eventStartDate = searchParams.get('eventStartDate');

  if (!limit) {
    limit = 6;
    setSearchParams({ limit });
  }

  useEffect(() => {
    const url = `${APIS.event}${location.search}&minPrice=${value[0]}&maxPrice=${value[1]}`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setCardData(result.data);
      });
  }, [value, limit, location.search, checkLiked]);

  useEffect(() => {
    const url = `${APIS.wishlist}`;

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
        let idList = [];
        result.wishlist.forEach(el => {
          idList.push(el.event_id);
        });
        setWishlistId(idList);
      });
  }, [wishlistId]);

  const setId = (data, event_id) => {
    setCheckLiked(fetchLiked(TOKEN, APIS.wishlist, data, event_id));
  };

  useEffect(() => {
    searchParams.delete('categoryId');
    searchParams.delete('countryId');
    searchParams.delete('ageRange');
    searchParams.delete('orderBy');
    searchParams.delete('eventStartDate');
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    fetch('data/eventCategoryData.json')
      .then(response => response.json())
      .then(result => setCategoryData(result));
  }, []);

  const dateFormat = userDate => {
    const year = userDate.getFullYear();

    const month = String(userDate.getMonth() + 1).padStart(2, '0');
    const date = String(userDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
  };

  const handleCategoryState = (category, key, categoryData) => {
    const categoryIndex = categoryData.subCategory.indexOf(category) + 1;
    const categoryIdArr = searchParams.getAll(key);

    if (categoryIdArr.includes(String(categoryIndex))) {
      const newArr = categoryIdArr.filter(el => el != categoryIndex);
      searchParams.delete(key);
      newArr.forEach(el => {
        searchParams.append(key, el);
      });
    } else {
      searchParams.append(key, categoryIndex);
    }

    setSearchParams(searchParams);
  };

  const handleMoreEvent = () => {
    searchParams.set('limit', Number(limit) + 6);
    setSearchParams(searchParams);
  };

  const handleUserDate = date => {
    const formattedDate = dateFormat(date);
    searchParams.set('eventStartDate', formattedDate);
    setSearchParams(searchParams);
  };

  const [date, setDate] = useState(new Date());

  if (!cardData) return null;

  return (
    <S.EventList>
      <S.Container>
        <S.ContainerLeft>
          <CalenderBox>
            <Calendar
              locale="en"
              calendarType="Hebrew"
              onClickDay={value => {
                handleUserDate(value);
              }}
              value={date}
            />
          </CalenderBox>
          {categoryData.map(data => {
            return (
              <Category
                data={data}
                key={data.id}
                handleCategoryState={e => {
                  handleCategoryState(e, data.key, data);
                }}
              />
            );
          })}
          <S.TokenBox>
            <PriceRangeFilter value={value} setValue={setValue} />
          </S.TokenBox>
          <S.TokenQuantity>
            <span>0</span>
            <span>300</span>
          </S.TokenQuantity>
          <GoToTop />
        </S.ContainerLeft>
        <S.ContainerRight>
          <S.TitleBox>
            <S.Title>EVENT</S.Title>
            <S.Titlesymbol src="/images/common/kulture-symbol.png" />
          </S.TitleBox>
          <S.TitleLine />
          <S.FilterBox>
            <DropBox
              isOpenDropBox={isOpenDropBox}
              setIsOpenDropBox={setIsOpenDropBox}
            />
          </S.FilterBox>
          <S.WrapperCard>
            {cardData.map(data => {
              return (
                <EventCard
                  key={data.event_id}
                  data={data}
                  type="list"
                  setId={setId}
                  wishlistId={wishlistId}
                  wishlist={wishlist}
                />
              );
            })}
          </S.WrapperCard>

          <S.More
            onClick={() => {
              handleMoreEvent();
            }}
          >
            <S.MoreLine />
            <S.MoreText>더보기</S.MoreText>
          </S.More>
        </S.ContainerRight>
      </S.Container>
    </S.EventList>
  );
};

export default EventList;
