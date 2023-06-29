import React from 'react';
import { useLocation } from 'react-router-dom';
import { S } from './GoToTop';

const GoToTop = ({ type }) => {
  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const location = useLocation();
  if (location.pathname === '/account') {
    return null;
  }

  return (
    <>
      {type === 'list' ? (
        <S.GoToTopList onClick={goToTop}>
          <S.Chevron src="/images/common/chevron.png" />
        </S.GoToTopList>
      ) : (
        <S.GoToTopBox onClick={goToTop}>
          <S.Chevron src="/images/common/chevron.png" />
        </S.GoToTopBox>
      )}
    </>
  );
};

export default GoToTop;
