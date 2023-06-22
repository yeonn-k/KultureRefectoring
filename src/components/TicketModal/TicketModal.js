import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';
import { MdClear } from 'react-icons/md';

export const S = {
  Backdrop: styled.div`
    ${Mixin.flexCenter}
    z-index:1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(5px);
  `,

  Modal: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 80px 50px 50px 50px;
    width: fit-content;
    background-color: ${props => props.theme.kultureBackground};
    border: 4px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
  `,

  ExitBtn: styled(MdClear)`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: ${props => props.theme.kultureGreen};
    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  `,

  Text: styled.p`
    font-size: 16px;
    color: ${props => props.theme.white};
  `,
};
