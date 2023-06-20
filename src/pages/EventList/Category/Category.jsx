import React from 'react';
import { S } from './Category';

const Category = ({ data }) => {
  const { mainCategory, subCategory } = data;
  return (
    <S.Category>
      <S.Title>{mainCategory}</S.Title>
      <S.TitleLine />

      {Array.isArray(subCategory)
        ? subCategory.map(subcategory => (
            <S.SubCategories key={data.id}>
              <S.CheckIcon src="/images/common/check-false.png" />
              <S.SubCategory>{subcategory}</S.SubCategory>
            </S.SubCategories>
          ))
        : subCategory}
    </S.Category>
  );
};

export default Category;
