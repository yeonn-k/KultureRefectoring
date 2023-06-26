import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { LuImagePlus } from 'react-icons/lu';

const CloseInput = styled(MdClose)`
  position: absolute;
  color: #97fe67;
  right: 5px;
  cursor: pointer;
`;

const ChangeImg = styled(LuImagePlus)`
  width: 30px;
  height: 30px;
  color: ${props => props.theme.kultureGreen};
  position: absolute;
  top: 45%;
  right: 40%;
  z-index: 999;
  cursor: pointer;
`;

export const S = {
  CloseInput,
  ChangeImg,
  ProfileBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 20px;
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

  EditInfo: styled.button`
    font-size: 18px;
    font-weight: 400;
    text-decoration: underline;
    color: white;
  `,

  ChangeName: styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: none;
    margin-top: -50px;
    border: 2px solid #97fe67;
    font-size: 18px;
    color: white;
    height: 40px;
    width: 170px;
  `,
  InputWrapper: styled.div`
    position: relative;
  `,

  ModifyImg: styled.div`
    position: absolute;
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${props => props.theme.lightGrey};
    top: 0;
    opacity: 0.8;
    cursor: pointer;
  `,
  ProfileWrap: styled.div`
    position: relative;
  `,
};
