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
    textBody: {
      textAlign: 'center'
    }
  }));
  const classes = useStyles();
  const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 24];
  const minutesList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
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
      <Grid container spacing={3} alignItems="center" className={classes.textBody}>
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
              {
                hourList.map((x) =>{
                  return (
                    <MenuItem value={x}>{x}</MenuItem>
                  )
                })
              }
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
              {
                minutesList.map((x) =>{
                  return (
                    <MenuItem value={x}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          燃料
        </Grid>
        <Grid item xs={3}>
          弾薬
        </Grid>
        <Grid item xs={3}>
          鋼材
        </Grid>
        <Grid item xs={3}>
          ボーキ
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
