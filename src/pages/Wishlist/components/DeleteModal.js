import styled from 'styled-components';

export const S = {
  DeleteModal: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
  DeleteModalBox: styled.div`
    position: absolute;
    top: 38%;
    left: 50%;
    margin-left: -181px;
    width: 27%;
    height: 20%;
    background-color: rgba(35, 35, 35, 0.93);
    border-radius: 13px;
    border: 2px solid ${props => props.theme.kultureGreen};
  `,
  Delete: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74%;
  `,
  Button: styled.div`
    height: 26%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Line: styled.div`
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
  `,
  Apply: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  `,
  LineLower: styled.div`
    height: 40%;
    width: 1px;
    background-color: #d4d4d4;
  `,
  Cancel: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  `,
};
