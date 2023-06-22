import styled from 'styled-components';

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

  HistoryBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 930px;
  `,
};
