import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

export const S = {
  GoToTopList: styled.div`
    position: absolute;
    left: 200px;
    width: 154px;
    margin-top: 10px;
    margin-left: -74px;
    height: 50px;
    border-radius: 30px;
    border: 3px solid ${props => props.theme.kultureGreen};
    ${Mixin.flexCenter}

    &:hover {
      cursor: pointer;
    }
  `,

  GoToTopBox: styled.div`
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border: 3px solid ${props => props.theme.kultureGreen};
    ${Mixin.flexCenter}

    &:hover {
      cursor: pointer;
    }
  `,

  Chevron: styled.img`
    width: 21px;
    height: 14px;
  `,
};
