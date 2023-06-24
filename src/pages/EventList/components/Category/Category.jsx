import React, { useState } from 'react';

import { S } from './Category';
import { useSearchParams } from 'react-router-dom';

const Category = ({ data, handleCategoryState }) => {
  const { mainCategory, subCategory, key } = data;

  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedCategory, setCheckedCategory] = useState([]);

  const handleCheckedCategory = id => {
    if (checkedCategory.includes(id)) {
      setCheckedCategory(checkedCategory.filter(el => el !== id));
    } else {
      setCheckedCategory([...checkedCategory, id]);
    }
  };

  return (
    <S.Category>
      <S.Title>{mainCategory}</S.Title>
      <S.TitleLine />
      {Array.isArray(subCategory)
        ? subCategory.map(subcategory => {
            return (
              <S.SubCategories
                key={subcategory}
                onClick={() => {
                  handleCheckedCategory(subcategory);
                  handleCategoryState(subcategory, data.key);
                }}
              >
                <S.CheckIcon
                  src={
                    checkedCategory.includes(subcategory)
                      ? '/images/common/check-true.png'
                      : '/images/common/check-false.png'
                  }
                />
                {checkedCategory.includes(subcategory) ? (
                  <S.SubCategoryTrue>{subcategory}</S.SubCategoryTrue>
                ) : (
                  <S.SubCategoryFalse>{subcategory}</S.SubCategoryFalse>
                )}
              </S.SubCategories>
            );
          })
        : subCategory}
    </S.Category>
  );
};

export default Category;
