import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';

export const S = {
  Container: styled.div`
    ${Mixin.flexCenter}
    height: calc(100vh - 300px);
  `,

  Loading: styled.div`
    color: ${props => props.theme.lightGrey};
    font-size: 20px;
  `,
};
