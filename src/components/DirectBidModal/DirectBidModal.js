import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiCursorClick } from 'react-icons/hi';
import { TfiClose } from 'react-icons/tfi';

const CloseIcon = styled(TfiClose)`
  color: #97fe67;
  width: 25px;
  height: 30px;
  float: right;
  cursor: pointer;
`;

const MinusIcon = styled(FaMinus)`
  cursor: pointer;
  width: 13px;
`;

const PlusIcon = styled(FaPlus)`
  cursor: pointer;
  width: 13px;
`;

const ChargeIcon = styled(HiCursorClick)`
  color: #e84848;
`;

const DisableBidBtn = styled.button`
  margin-top: 50px;
  float: right;
  width: 200px;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: ${props => (props.disabled ? '#424242' : '#97fe67')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const S = {
  MinusIcon,
  PlusIcon,
  ChargeIcon,
  CloseIcon,
  DisableBidBtn,

  BidModalContainer: styled.div`
    position: fixed;
    z-index: 9999;
  `,

  BidModalWrapper: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 750px;
    height: 615px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 10px;
    border: 3px solid #97fe67;
    background-color: #1c1b1b;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 0 9999px;
  `,

  BidEventImg: styled.img`
    width: 250px;
    border-radius: 10px;
  `,

  BidTitle: styled.p`
    font-size: 22px;
    font-weight: 700;
    margin: 20px 0;
  `,

  BidContent: styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 10px 3px 0 0;
  `,

  BidModalWrap: styled.div`
    display: flex;
    margin: 50px 30px 0 30px;
  `,

  BidContentWrap: styled.div`
    margin: auto 40px;
    align-items: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  BidCountWrap: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 140px;
    height: 42px;
    border: 3px solid #97fe67;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 700;
  `,

  BidCountContainer: styled.div`
    display: flex;
    justify-content: end;
    right: 0;
  `,

  Divider: styled.hr`
    border: 1px solid #424242;
    margin: 40px 0;
  `,

  TokenInput: styled.div`
    background-color: transparent;
    color: white;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: none;
    background: none;
    font-size: 22px;
    width: 100%;
    padding-left: 25px;
    z-index: 2;
    height: 30px;
  `,

  TokenInputWrap: styled.div`
    width: 100%;
    max-width: 780px;
    border-bottom: 3px solid #97fe67;
    position: relative;
  `,

  BidTokenPrice: styled.p`
    font-size: 16px;
    font-weight: 500;
  `,

  GoToCharge: styled.div`
    display: flex;
    justify-content: start;
    margin-right: 5px;
  `,

  BidSaveToken: styled.div`
    display: flex;
    align-items: center;
  `,

  BidToken: styled.img`
    width: 15px;
    height: 16px;
    margin-left: 5px;
    color: #e84848;
  `,

  BidLargeToken: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 26px;
    float: left;
  `,

  ChargeText: styled(Link)`
    font-size: 16px;
    color: #e84848;
    margin-left: 5px;
    cursor: pointer;
  `,

  BidContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  `,

  Placeholder: styled.div`
    position: absolute;
    top: 0;
    left: 25px;
    font-size: 22px;
    color: #424242;
    margin-left: 5px;
    z-index: 0;
  `,
  BidBackground: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 50;
  `,
};
