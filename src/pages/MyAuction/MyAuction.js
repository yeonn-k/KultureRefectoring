import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

export const S = {
  AuctionBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 20px;
    width: 930px;
    padding: 60px;
    border: 2px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
  `,

  TextUnit: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  StatusWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 45px;
  `,

  Status: styled.div`
    ${Mixin.flexCenter}
    width: 450px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
    border: ${props =>
      props.selected ? `3px solid ${props.theme.kultureGreen}` : 'none'};
    &:hover {
      cursor: pointer;
    }
  `,

  KeyWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${props => props.gap};
    margin-top: 15px;
    padding-right: 45px;
  `,

  DataKey: styled.div`
    ${Mixin.flexCenter}
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.lightGrey};
  `,

  HistoryBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 930px;
  `,

  HistoryBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
  `,

  EventImg: styled.div`
    width: 120px;
    aspect-ratio: 16/9;
    border-radius: 7px;
    background-image: url(${props => props.src});
    background-size: 100%;
  `,

  EventInfoUnit: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  `,

  EventName: styled.div`
    font-size: 18px;
    font-weight: 500;
  `,

  DateLocation: styled.div`
    font-size: 16px;
    font-weight: 400;
  `,

  Quantity: styled.div`
    ${Mixin.flexCenter}
    font-size: 18px;
    font-weight: 500;
    width: 100px;
  `,

  TokenUnit: styled.div`
    ${Mixin.flexCenter}
    gap: ${props => props.gap};
    width: ${props => props.width};
  `,

  EndDate: styled.div`
    ${Mixin.flexCenter}
    font-size: 16px;
    font-weight: 400;
    width: 100px;
  `,

  BidResult: styled.div`
    ${Mixin.flexCenter}
    font-size: 18px;
    font-weight: 600;
    width: 80px;
    color: ${props =>
      props.success
        ? `${props.theme.kultureGreen}`
        : `${props.theme.lightGrey}`};
  `,
};
