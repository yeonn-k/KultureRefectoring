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
  width: 200px;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #424242;
  margin-top: 50px;
  float: right;
`;

const ableBidBtn = styled.button`
  background-color: #97fe67;
  width: 200px;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  float: right;
  margin: 20px auto;
`;

const Divider = styled.hr`
  border: 1px solid #424242;
  margin: 30px 0;
`;

const PrimeDrivider = styled(Divider)`
  border: 1px solid #97fe67;
`;

const BidContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const BidContents = styled(BidContent)`
  display: left;
`;

export const S = {
  BidContent,
  PrimeDrivider,
  Divider,
  MinusIcon,
  PlusIcon,
  ChargeIcon,
  CloseIcon,
  DisableBidBtn,
  ableBidBtn,

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
    height: 790px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 10px;
    border: 3px solid #97fe67;
    background-color: #1c1b1b;
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

  BidModalWrap: styled.div`
    display: flex;
    margin: 30px 30px 0 30px;
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

  TokenInput: styled.input`
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
    text-indent: 100%;
    padding-right: 25px;
    z-index: 2;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
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
    width: 25px;
    height: 26px;
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
    right: 25px;
    font-size: 22px;
    color: #424242;
    margin-right: 5px;
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

  OrderContentWrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  `,

  BidFlex: styled.div`
    display: flex;
  `,

  OrdeTitle: styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #a5a5a5;
  `,

  TotalToken: styled.div`
    font-size: 22px;
  `,

  OrderUserInfo: styled.div`
    display: flex;
  `,
};
