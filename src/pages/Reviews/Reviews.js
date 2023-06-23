import styled from 'styled-components';

export const S = {
  Container: styled.div`
    margin: 0 auto;
    max-width: 1440px;
  `,

  TitleWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
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
    width: fit-content;
    margin: 0 auto;
  `,

  ReviewCardWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    min-width: 1130px;
    max-width: 1130px;
  `,
};
