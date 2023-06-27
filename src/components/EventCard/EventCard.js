import styled from 'styled-components';

export const S = {
  EventCard: styled.div`
    width: 404px;
    height: 305px;
    margin-bottom: 60px;
  `,

  EventImage: styled.div`
    position: relative;
    width: 404px;
    height: 227px;
    margin-bottom: 17px;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: cover;
    &:hover {
      cursor: pointer;
    }
  `,

  EventTitle: styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 5px;

    &:hover {
      cursor: pointer;
    }
  `,

  EventDescription: styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 5px;
  `,

  WishlistEventDescription: styled.div`
    display: flex;
    margin-right: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 5px;
  `,

  EventTime: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 5px;
    color: ${props => props.theme.kultureGreen};
  `,

  EventIcon: styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
  `,

  Check: styled.img`
    position: absolute;
    width: 26px;
    height: 23px;
    top: 13px;
    right: 50px;

    &:hover {
      cursor: pointer;
    }
  `,

  Heart: styled.img`
    position: absolute;
    width: 26px;
    height: 23px;
    top: 13px;
    right: 13px;

    &:hover {
      cursor: pointer;
    }
  `,

  TokenBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    right: 13px;
    bottom: 13px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    background-color: rgba(27, 27, 27, 0.5);
  `,

  Token: styled.img`
    width: 20px;
  `,
};
