import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { S } from './Category';

const Category = ({ data, handleCategoryState }) => {
  const { mainCategory, subCategory, key } = data;
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedCategory, setCheckedCategory] = useState(
    searchParams.getAll(key)
  );

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
        ? subCategory.map((subcategory, idx) => {
            return (
              <S.SubCategories
                key={subcategory}
                onClick={() => {
                  handleCheckedCategory(String(idx + 1));
                  handleCategoryState(subcategory, data.key);
                }}
              >
                <S.CheckIcon
                  src={
                    checkedCategory.includes(String(idx + 1))
                      ? '/images/common/check-true.png'
                      : '/images/common/check-false.png'
                  }
                />
                {checkedCategory.includes(String(idx + 1)) ? (
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
