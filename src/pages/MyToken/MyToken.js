import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';
import { Mixin } from '../../styles/mixin';

export const S = {
  PaymentBtn: styled.div`
    ${Mixin.flexCenter};
    padding: 5px 20px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.black};
    background-color: ${props =>
      props.active ? props.theme.kultureGreen : '#cccccc'};
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  `,

  CheckIcon: styled(MdCheck)`
    margin-right: 15px;
    font-size: 25px;
    color: ${props =>
      props.selected ? `${props.theme.kultureGreen}` : 'white'};
  `,

  TokenUnit: styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap};
    width: ${props => props.width};
  `,

  TotalTokenUnit: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    width: 250px;
  `,

  KRWUnit: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: ${props => props.gap};
    width: ${props => props.width};
  `,

  ChargeBox: styled.div`
    margin-bottom: 10px;
    padding: 50px 60px 30px 60px;
    width: 930px;
    background-color: ${props => props.theme.darkGrey};
    border: 2px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
  `,

  LineUnit: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `,

  AlertDiv: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
  `,

  ZeroAlert: styled.div`
    display: ${props => (props.status ? 'none' : 'flex')};
    color: ${props => props.theme.kultureGreen};
    font-size: 16px;
    font-weight: 400;
  `,

  Divider: styled.hr`
    border: 1px solid ${props => props.theme.kultureGreen};
    margin-bottom: 20px;
  `,

  OptionBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 930px;
  `,

  OptionBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 0 50px;
    height: 42px;
    background-color: ${props => props.theme.darkGrey};
    border: ${props =>
      props.selected ? `2px solid ${props.theme.kultureGreen}` : 'none'};
    &:hover {
      cursor: pointer;
      border: 2px solid ${props => props.theme.kultureGreen};
    }
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
    border-radius: 10px;
    padding: 20px 50px;
    background-color: ${props => props.theme.darkGrey};
  `,
};
