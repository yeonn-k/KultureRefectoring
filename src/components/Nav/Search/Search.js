import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { BiSearch } from 'react-icons/bi';

const CloseSearch = styled(TfiClose)`
  color: #97fe67;
  width: 25px;
  height: 30px;
  margin: 20px 20px 0;
  float: right;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  width: 32px;
  height: 32px;
  margin-top: 24px;
  right: 0;
  color: #97fe67;
`;

export const S = {
  CloseSearch,
  SearchIcon,

  SearchContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    z-index: 9999;
  `,

  SearchWrapper: styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1440px;
    height: 250px;
    background-color: #1c1b1b;
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 0 9999px;
  `,

  InnerWrapper: styled.div`
    position: relative;
    width: 800px;
    /* min-height: 390px; */
    padding-top: 80px;
    /* padding-bottom: 110px; */
    padding-left: 0;
    padding-right: 0;
    margin: auto;
  `,
  SearchBar: styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: none;
    background: none;
    max-height: 80px;
    width: 100%;
    max-width: 800px;
    height: 80px;
    padding: 2.2rem 0 2.5rem;
    border-bottom: 3px solid #97fe67;
    font-weight: 500;
    font-size: 3rem;
    background-color: transparent;
    color: white;
    font-size: 32px;
  `,

  ListWrap: styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
    gap: 20px;
    overflow-x: auto;
    width: 100%;
    background-color: #1c1b1b;
  `,
};
