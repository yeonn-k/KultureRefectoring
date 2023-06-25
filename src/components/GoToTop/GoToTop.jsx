import React from 'react';
import { S } from './GoToTop';

const GoToTop = () => {
  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <S.GoToTopBox onClick={goToTop}>
      <S.Chevron src="/images/common/chevron.png" />
    </S.GoToTopBox>
  );
};

export default GoToTop;
