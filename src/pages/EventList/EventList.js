import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    width: 1324px;
    margin: 0 auto;
    margin-top: 140px;
  `,

  ContainerLeft: styled.div`
    width: 400px;
    margin-right: 64px;
    margin-top: 60px;
  `,

  TokenBox: styled.div`
    width: 400px;
    height: 70px;
    background-color: #8c8c8c;
    opacity: 22%;
  `,

  ContainerRight: styled.div``,
  Titlesymbol: styled.img`
    float: right;
    width: 40px;
    height: 40px;
  `,

  TitleBox: styled.div`
    width: 860px;
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
    width: 860px;
    height: 1px;
    background-color: #d9d9d9;
    margin-top: 60px;
    margin-bottom: 20px;
  `,

  FilterBox: styled.div`
    width: 860px;
    height: 20px;
    margin-bottom: 30px;
  `,

  Filter: styled.div`
    float: right;
  `,

  FilterIcon: styled.div`
    float: right;
    width: 36px;
    height: 26px;
    background-image: url('/images/EventList/filterIcon.png');
    background-size: cover;
    background-position-y: -3px;
  `,

  WrapperCard: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 855px;
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
    margin-left: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 30px;
    border: 1px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
    background-color: ${props => props.theme.kultureBackground};
    color: ${props => props.theme.kultureGreen};
    font-weight: 400;
  `,
};
