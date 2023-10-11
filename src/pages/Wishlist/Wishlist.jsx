import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchLiked from '../../hooks/fetchLiked.js';

import EventCard from '../../components/EventCard/EventCard.jsx';
import DeleteModal from './components/DeleteModal/DeleteModal.jsx';

import { APIS } from '../../config.js';

import { S } from './Wishlist';
import 'react-calendar/dist/Calendar.css';
import GoToTop from '../../components/GoToTop/GoToTop.jsx';
import { type } from '@testing-library/user-event/dist/type/index.js';

const Wishlist = event_id => {
  const TOKEN = localStorage.getItem('accessToken');

  const [wishlist, setWishlist] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [checkList, setCheckList] = useState([]);
  const [wishlistId, setWishlistId] = useState([]);
  const [deleteAll, setdeleteAll] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [type, setType] = useState('');

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
        getWishList();
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
    if (checkList.length > 0) {
      let copy = [...wishlist];
      setWishlist(copy.filter(el => !checkList.includes(el.id)));
      setType('checked');
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
        getWishList();
      } else {
        throw new Error('network error');
      }
    });
  };

  const handleMoreEvent = () => {
    searchParams.set('limit', Number(limit) + 6);
    setSearchParams(searchParams);
  };

  const getWishList = () => {
    const url = `${APIS.wishlist}?limit=${limit}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: TOKEN,
      },
    })
      .then(response => {
        if (response.ok) {
          response.json();
        } else {
          throw new Error('network error');
        }
      })
      .then(result => {
        setWishlist(result.wishlist);
        let idList = [];
        result.wishlist.forEach(el => {
          idList.push(el.event_id);
        });
        setWishlistId(idList);
      })
      .catch(error => console.log('Error: ', error));
  };

  useEffect(() => {
    getWishList();
  }, [limit]);

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
          <S.All
            onClick={() => {
              handleDeleteModal();
              setType('all');
            }}
          >
            전체삭제
          </S.All>
          <S.Select
            onClick={() => {
              handleDeleteModal();
              setType('checked');
            }}
            disabled={!checkList || checkList.length === 0}
            type="checked"
          >
            선택삭제
          </S.Select>
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
            handleDeleteAll={handleDeleteAll}
            setIsDelete={setIsDelete}
            type={type}
          />
        )}
      </S.Container>
      <GoToTop />
    </div>
  );
};

export default Wishlist;
