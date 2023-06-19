import React, { useState } from 'react';
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

export const PriceRangeFilter = () => {
  const classes = useStyles();
  const [value, setValue] = useState([100, 200]);

  const handleChange = newValue => {
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
        />
      </ThemeProvider>
    </div>
  );
};
