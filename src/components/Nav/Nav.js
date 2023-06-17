import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const S = {
  NavTitle: styled(Link)`
    width: 100%;
    height: 27px;
    align-items: center;
    font-size: 22px;
    margin-right: 40px;
    padding-bottom: 59px;
    cursor: pointer;

    &:hover {
      border-bottom: 3px solid #97fe67;
    }
  `,

  NavContainer: styled.div`
    width: 1440px;
    height: 100px;
    background-color: #1c1b1b;
    align-items: center;
  `,

  NavTitleContainer: styled.div`
    display: flex;
    align-content: center;
  `,

  NavLogo: styled.img`
    width: 197px;
    height: 52px;
    margin: 18px 20px 40px 10px;
    cursor: pointer;
  `,

  NavTitleWrap: styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 40px;
  `,

  NavSearch: styled.img`
    margin-top: 2px;
    width: 19px;
    height: 19px;
    cursor: pointer;
  `,

  NavTopWrap: styled.div`
    display: flex;
    float: right;
    margin-top: 15px;
    margin-right: 5px;
  `,

  LoginBtn: styled.button`
    width: 73px;
    height: 24px;
    font-size: 16px;
    color: #97fe67;
    border: 2px solid #97fe67;
    border-radius: 10px;
    margin-right: 13px;
    cursor: pointer;
  `,

  NavTokenImg: styled.img`
    width: 23px;
    height: 24px;
    margin-right: 10px;
    cursor: pointer;
  `,
};
