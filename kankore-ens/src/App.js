import React from 'react';
import { makeStyles, FormControl, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';

import './App.css';

function App() {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 60,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [enseiHour, setEnseiHour] = React.useState('');
  const [enseiMinutes, setEnseiMinutes] = React.useState('');
  const changeEnseiHour = event => {
    setEnseiHour(event.target.value);
  };
  const changeEnseiMinutes = event => {
    setEnseiMinutes(event.target.value);
  };
  return (
    <div className="App">
      <h2 className="header">艦これ　遠征支援プログラム ver2.0</h2>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={5}>
          遠征に出す時間：
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="enseiHour">時間</InputLabel>
            <Select
              labelId="enseiHour"
              id="enseiHourSelect"
              value={enseiHour}
              onChange={changeEnseiHour}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={24}>24</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
        <FormControl className={classes.formControl}>
            <InputLabel id="enseiMinutes">分</InputLabel>
            <Select
              labelId="enseiMinutes"
              id="enseiMinutesSelect"
              value={enseiMinutes}
              onChange={changeEnseiMinutes}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={55}>55</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
