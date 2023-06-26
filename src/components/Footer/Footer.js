import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  max-width: none;
  min-width: 1360px;
  height: 100px;
  background-color: #121212;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterImg = styled.img`
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;
