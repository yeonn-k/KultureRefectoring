import { Portal } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material';
import { style } from '@mui/system';
import styled from 'styled-components';

export const S = {
  DropBox: styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
  `,

  FilterIcon: styled.div`
    width: 36px;
    height: 26px;
    background-image: url('/images/EventList/filterIcon.png');
    background-size: cover;
    background-position-y: -3px;
    &:hover {
      cursor: pointer;
    }
  `,

  FilterWrapper: styled.div`
    position: absolute;
    float: right;
    width: 120px;
    top: 24px;
    right: 17px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 10;
    background-color: rgba(66, 66, 66, 0.7);
    border-radius: 10px;
  `,

  Filter: styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 78px;
    margin: 3px 0px;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
  `,
};
