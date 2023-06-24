import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

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

    &:hover {
      cursor: pointer;
    }
  `,

  All: styled.span`
    float: right;
    color: #d9d9d9;
    opacity: 0.4;

    &:hover {
      cursor: pointer;
    }
  `,

  WrapperCard: styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-rows: 350px 350px;
    grid-template-columns: 465px 465px 465px;
  `,

  More: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    width: 1440px;
    height: 40px;
    margin-top: 40px;
  `,

  MoreLine: styled.div`
    position: absolute;
    top: 15px;
    width: 1324px;
    height: 1px;
    background-color: ${props => props.theme.kultureGreen};
  `,

  MoreText: styled.div`
    position: absolute;
    left: 50%;
    margin-left: -37px;
    ${Mixin.flexCenter}
    width: 74px;
    height: 30px;
    border: 1px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
    background-color: ${props => props.theme.kultureBackground};
    color: ${props => props.theme.kultureGreen};
    font-weight: 400;

    :hover {
      cursor: pointer;
    }
  `,
};
