import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
  `,

  ReviewImg: styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    margin-bottom: 10px;
    border-radius: 10px;
    background-image: url(${props => props.src});
    background-color: ${props => props.theme.darkGrey};
    background-size: 100%;
  `,

  DeleteBtn: styled(RiDeleteBinLine)`
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 20px;
    color: ${props => props.theme.white};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.kultureGreen};
    }
  `,

  Author: styled.p`
    font-size: 16px;
    font-weight: 600;
  `,

  ReviewText: styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  `,
};
