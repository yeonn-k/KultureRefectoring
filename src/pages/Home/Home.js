import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

export const S = {
  Banner: styled.div`
    ${Mixin.flexCenter}
    flex-direction: column;
    gap: 25px;
    width: 100%;
    min-width: 1360px;
    margin-top: 4px;
    aspect-ratio: ${props => props.ratio};
    background-image: url(${props => props.src});
    background-size: 100%;
    background-position: center;
    filter: grayscale(100%);
  `,

  TextMain: styled.div`
    font-size: 80px;
    font-weight: 600;
    text-shadow: ${props => props.theme.darkGrey} 5px 0 10px;
  `,

  TextSub: styled.div`
    font-size: ${props => props.size};
    font-weight: 600;
    text-shadow: ${props => props.theme.darkGrey} 5px 0 10px;
  `,
  SectionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    width: fit-content;
    margin: auto;
  `,

  SectionTitle: styled.p`
    font-size: 22px;
    font-weight: 500;
  `,

  BoxWrapper: styled.div`
    display: flex;
    gap: 28px;
    justify-content: center;
    width: fit-content;
  `,

  CategoryBox: styled.div`
    position: relative;
    max-width: 300px;
    min-width: 300px;
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
