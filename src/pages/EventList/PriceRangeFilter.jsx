import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#97FE67',
      contrastText: '#1C1B1B',
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

export const PriceRangeFilter = ({ value, setValue }) => {
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom />
      <ThemeProvider theme={theme}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0}
          max={300}
          step={10}
        />
      </ThemeProvider>
    </div>
  );
};
