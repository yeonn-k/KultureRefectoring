import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1324px;
    margin: 0 auto;
    margin-top: 140px;
  `,

  Titlesymbol: styled.img`
    float: right;
    width: 40px;
    height: 40px;
  `,

  TitleBox: styled.div`
    width: 1324px;
  `,

  Title: styled.h1`
    float: right;
    font-size: 27px;
    font-weight: 700;
    line-height: 36px;
    margin-top: 10px;
    margin-bottom: 22px;
    color: ${props => props.theme.kultureGreen};
  `,

  TitleLine: styled.div`
    width: 1324px;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 0.4;
    margin-bottom: 20px;
  `,

  DeleteBox: styled.div`
    width: 1324px;
  `,

  Select: styled.span`
    float: right;
    margin-right: 20px;
    opacity: 0.4;
    color: #d9d9d9;
  `,

  All: styled.span`
    float: right;
    color: #d9d9d9;
    opacity: 0.4;
  `,

  WrapperCard: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
  `,
};
