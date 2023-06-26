import styled from 'styled-components';
import { Mixin } from '../../styles/mixin';
import { MdClear } from 'react-icons/md';
import { LuImagePlus } from 'react-icons/lu';

export const S = {
  Backdrop: styled.div`
    ${Mixin.flexCenter}
    z-index:1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: brightness(50%);
  `,

  Modal: styled.form`
    ${Mixin.flexCenter}
    position: relative;
    flex-direction: column;
    gap: 10px;
    padding: 80px 50px 50px 50px;
    width: 700px;
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

  Title: styled.p`
    font-size: 18px;
    font-weight: 400;
  `,

  EventName: styled.p`
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
  `,

  ReviewText: styled.textarea`
    padding: 10px;
    margin: 40px 0;
    width: 90%;
    height: 80px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Pretendard';
    color: ${props => props.theme.white};
    background-color: transparent;
    resize: none;
    border: 1px solid ${props => props.theme.kultureGreen};
    border-radius: 5px;
    outline: none;
    &:placeholder {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Pretendard';
      color: ${props => props.theme.lightGrey};
    }
  `,

  FileInputLabel: styled.div`
    position: relative;
    width: 30px;
    height: 30px;
  `,

  ImagePlus: styled(LuImagePlus)`
    font-size: 30px;
    color: ${props => props.theme.kultureGreen};
  `,

  FileInput: styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    opacity: 0;
    &::-webkit-file-upload-button {
      width: 30px;
      height: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  `,

  FileAdded: styled.p`
    font-size: 14px;
    font-weight: 400;
  `,

  SubmitBtn: styled.div`
    padding: 10px 30px;
    margin-top: 40px;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.kultureGreen};
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
};
