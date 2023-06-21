import styled from 'styled-components';

export const S = {
  ProfileBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
    width: 930px;
    padding: 60px;
    border: 2px solid ${props => props.theme.kultureGreen};
    border-radius: 10px;
  `,

  ProfileImg: styled.div`
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${props => props.theme.lightGrey};
    background-image: url(${props => props.src});
    background-size: 100%;
  `,

  BasicInfo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,

  TextUnit: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,

  DeleteAccount: styled.button`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.lightGrey};
    text-decoration: underline;
  `,
};
