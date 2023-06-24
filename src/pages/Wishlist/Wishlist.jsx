import React, { useEffect, useState } from 'react';

import EventCard from '../../components/EventCard/EventCard.jsx';

import { S } from './Wishlist';
import 'react-calendar/dist/Calendar.css';
import DeleteModal from './components/DeleteModal.jsx';

const Wishlist = () => {
  const [cardData, setCardData] = useState([]);

  const [checkList, setCheckList] = useState([]);
  const [deleteAll, setdeleteAll] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleChecked = id => {
    if (checkList.includes(id)) {
      setCheckList(checkList.filter(el => el !== id));
    } else {
      setCheckList([...checkList, id]);
    }
  };

  const handleDeleteAll = () => {
    setdeleteAll(true);
    setCardData([]);
  };

  const handleDeleteOne = id => {
    setIsLiked(true);
    setCardData(cardData.filter(el => el.id !== id));
  };

  const handleDeleteModal = () => {
    setIsDelete(prev => !prev);
  };

  const handleDeleteChecked = () => {
    if (checkList !== []) {
      let copy = [...cardData];
      setCardData(copy.filter(el => !checkList.includes(el.id)));
    }
  };

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
          <S.All onClick={handleDeleteAll}>전체삭제</S.All>
          <S.Select onClick={handleDeleteModal}>선택삭제</S.Select>
        </S.DeleteBox>
        <S.WrapperCard>
          {cardData.map(data => {
            return (
              <EventCard
                data={data}
                key={data.id}
                type="wishlist"
                cardData={cardData}
                setCardData={setCardData}
                handleDeleteOne={handleDeleteOne}
                handleChecked={handleChecked}
                handleDeleteChecked={handleDeleteChecked}
                checkList={checkList}
              />
            );
          })}
        </S.WrapperCard>
        <S.More>
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
