import styled from 'styled-components';
import { MdAlarmOn, MdCheckCircleOutline, MdBlock } from 'react-icons/md';
import { Mixin } from '../../styles/mixin';

export const S = {
  TextUnit: styled.div`
    display: flex;
    align-items: baseline;
    gap: 5px;
  `,

  AuctionBoxWrapper: styled.div`
    ${Mixin.flexCenter};
    gap: 18px;
    width: 930px;
    background-color: ${props => props.theme.darkGrey};
    border-radius: 10px;
  `,

  AuctionBoxIP: styled.div`
    ${Mixin.flexCenter};
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
  `,

  AuctionBoxDone: styled.div`
    ${Mixin.flexCenter};
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
    margin: 10px 0;
    border: 3px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
    color: ${props => props.theme.kultureGreen};
  `,

  AuctionBoxFail: styled.div`
    ${Mixin.flexCenter}
    flex-direction: column;
    gap: 15px;
    width: 290px;
    height: 180px;
  `,

  StatusBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  `,

  AuctionIP: styled(MdAlarmOn)`
    font-size: 25px;
    color: ${props => props.theme.white};
  `,

  AuctionDone: styled(MdCheckCircleOutline)`
    font-size: 25px;
    color: ${props => props.theme.kultureGreen};
  `,

  AuctionFail: styled(MdBlock)`
    font-size: 25px;
    color: ${props => props.theme.lightGrey};
  `,

  BidBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 930px;
  `,

  BidBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 10px 30px;
    background-color: ${props => props.theme.darkGrey};
  `,

  TokenDonationWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 930px;
  `,

  TokenBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 25px;
    width: 450px;
    height: 200px;
    padding-left: 60px;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.kultureGreen};
  `,

  TokenUnit: styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap};
    width: ${props => props.width};
  `,

  DonationBox: styled.div`
    ${Mixin.flexCenter}
    gap: 10px;
    width: 450px;
    height: 200px;
    padding: 0;
    border-radius: 10px;
    background-color: ${props => props.theme.darkGrey};
  `,

  EventName: styled.div`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.theme[props.col]};
    width: ${props => props.width};
    &:hover {
      cursor: pointer;
    }
  `,

  EventInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 420px;
  `,
};
