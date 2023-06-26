import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1360px;
  `,

  TitleWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    min-width: 1360px;
    margin-bottom: 40px;
    margin-right: 40px;
  `,

  TitleSymbol: styled.img`
    float: right;
    width: 40px;
    height: 40px;
  `,

  Title: styled.p`
    font-size: 27px;
    font-weight: 700;
    color: ${props => props.theme.kultureGreen};
  `,

  ReviewCardContainer: styled.div`
    margin: 0 30px;
  `,

  ReviewCardWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    min-width: 1130px;
    max-width: 1130px;
  `,
};
