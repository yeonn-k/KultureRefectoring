import styled from 'styled-components';

export const S = {
  Category: styled.div`
    margin-top: 37px;
  `,

  Title: styled.h2`
    font-size: 22px;
    font-weight: 600;
  `,

  TitleLine: styled.div`
    width: 400px;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 0.4;
    margin-top: 5px;
    margin-bottom: 10px;
  `,

  SubCategories: styled.div`
    height: 21px;
    width: 100px;
  `,

  CheckIcon: styled.img`
    width: 16px;
    margin-right: 10px;

    :hover {
      cursor: pointer;
    }
  `,

  SubCategoryTrue: styled.span`
    font-weight: 600;
    color: ${props => props.theme.kultureGreen};
    :hover {
      cursor: pointer;
      color: ${props => props.theme.kultureGreen};
    }
  `,

  SubCategoryFalse: styled.span`
    font-weight: 600;
    color: #bebebe;

    :hover {
      cursor: pointer;
      color: ${props => props.theme.kultureGreen};
    }
  `,
};
