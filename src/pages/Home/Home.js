import styled from 'styled-components';

export const S = {
  Banner: styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: ${props => props.ratio};
    background-image: url(${props => props.src});
    background-size: 100%;
  `,

  TextMain: styled.p`
    font-size: 50px;
    font-weight: 600;
  `,

  TextSub: styled.p`
    font-size: 40px;
    font-weight: 600;
  `,
  SectionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  `,

  SectionTitle: styled.p`
    font-size: 22px;
    font-weight: 500;
  `,

  BoxWrapper: styled.div`
    display: flex;
    gap: 28px;
    justify-content: center;
  `,

  CategoryBox: styled.div`
    position: relative;
    max-width: 320px;
    min-width: 320px;
    aspect-ratio: 16/9;
    border-radius: 10px;
    background-image: url(${props => props.src});
    background-size: 100%;
    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  `,

  CategoryText: styled.p`
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 20px;
    font-weight: 500;
  `,
};
