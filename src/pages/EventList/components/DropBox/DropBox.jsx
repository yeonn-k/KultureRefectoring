import React from 'react';
import { DROP_MENU } from '../../data/dropMenu';
import { S } from './DropBox';
import { useLocation, useSearchParams } from 'react-router-dom';

const DropBox = ({ isOpenDropBox, setIsOpenDropBox }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  let orderBy = searchParams.get('orderBy');

  const handleOrderBy = key => {
    searchParams.set('orderBy', key);
    setSearchParams(searchParams);
  };

  const handleDropBox = () => {
    setIsOpenDropBox(prev => !prev);
  };

  return (
    <S.DropBox>
      <S.Filter onClick={() => handleDropBox()}>정렬하기</S.Filter>
      {isOpenDropBox && (
        <S.FilterWrapper>
          {DROP_MENU.map(({ id, name }) => {
            return (
              <S.Filter
                key={id}
                onClick={() => {
                  handleOrderBy(DROP_MENU[id].key);
                }}
              >
                {name}
              </S.Filter>
            );
          })}
        </S.FilterWrapper>
      )}
      <S.FilterIcon onClick={handleDropBox} />
    </S.DropBox>
  );
};

export default DropBox;
