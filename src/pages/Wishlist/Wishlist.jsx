import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import EventCard from '../../components/EventCard/EventCard.jsx';
import { APIS } from '../../config.js';
import fetchLiked from '../../hooks/fetchLiked.js';

import { S } from './Wishlist';
import 'react-calendar/dist/Calendar.css';
import DeleteModal from './components/DeleteModal/DeleteModal.jsx';
import { check } from 'prettier';

const Wishlist = event_id => {
  const TOKEN = localStorage.getItem('accessToken');

  const [wishlist, setWishlist] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [checkList, setCheckList] = useState([]);
  const [wishlistId, setWishlistId] = useState([]);
  const [deleteAll, setdeleteAll] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [checkLiked, setCheckLiked] = useState('');

  let limit = searchParams.get('limit');

  const handleChecked = event_id => {
    if (checkList.includes(event_id)) {
      setCheckList(checkList.filter(el => el !== event_id));
    } else {
      setCheckList([...checkList, event_id]);
    }
  };

  const handleDeleteAll = () => {
    setdeleteAll(true);
    setWishlist([]);

    const url = `${APIS.wishlist}`;
    const deleteCards = wishlistId.join(',');

    fetch(`${url}/${deleteCards}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=urf-8',
        Authorization: TOKEN,
      },
    }).then(response => {
      if (response.ok) {
      }
    });
  };

  const handleDeleteOne = id => {
    setIsLiked(true);
    setWishlist(wishlist.filter(el => el.id !== id));
  };

  const handleDeleteModal = () => {
    setIsDelete(prev => !prev);
  };

  const handleDeleteChecked = id => {
    if (checkList !== []) {
      let copy = [...wishlist];
      setWishlist(copy.filter(el => !checkList.includes(el.id)));
    }

    const url = `${APIS.wishlist}`;
    const deleteCards = checkList.join(',');

    fetch(`${url}/${deleteCards}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=urf-8',
        Authorization: TOKEN,
      },
    }).then(response => {
      if (response.ok) {
      }
    });
  };

  const handleMoreEvent = () => {
    searchParams.set('limit', Number(limit) + 6);
    setSearchParams(searchParams);
  };

  if (!limit) {
    limit = 6;
    setSearchParams({ limit });
  }

  const getWishList = () => {
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
  };

  useEffect(() => {
    getWishList();
  }, [checkList]);

  const setId = (data, event_id) => {
    fetchLiked(TOKEN, APIS.wishlist, data, event_id, setWishlist, getWishList);
  };

  if (!wishlist) return null;

  return (
    <div>
      <S.Container>
        <S.TitleBox>
          <S.Title>WISHLIST</S.Title>
          <S.Titlesymbol src="/images/common/kulture-symbol.png" />
        </S.TitleBox>
        <S.TitleLine />
        <S.DeleteBox>
          <S.All onClick={handleDeleteAll}>전체삭제</S.All>
          <S.Select onClick={handleDeleteModal}>선택삭제</S.Select>
        </S.DeleteBox>
        <S.WrapperCard>
          {wishlist.length !== 0 ? (
            wishlist.map(data => {
              return (
                <EventCard
                  data={data}
                  key={data.event_id}
                  type="wishlist"
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  setId={setId}
                  handleDeleteOne={handleDeleteOne}
                  handleChecked={handleChecked}
                  handleDeleteChecked={handleDeleteChecked}
                  checkList={checkList}
                  TOKEN={TOKEN}
                  wishlistId={wishlistId}
                />
              );
            })
          ) : (
            <S.EmptyBox>
              <span>이벤트 카드를 담아주세요!</span>
            </S.EmptyBox>
          )}
        </S.WrapperCard>
        <S.More onClick={handleMoreEvent}>
          <S.MoreLine />
          <S.MoreText>더보기</S.MoreText>
        </S.More>
        {isDelete && (
          <DeleteModal
            checkList={checkList}
            handleDeleteChecked={handleDeleteChecked}
            handleDeleteModal={handleDeleteModal}
          />
        )}
      </S.Container>
    </div>
  );
};

export default Wishlist;
