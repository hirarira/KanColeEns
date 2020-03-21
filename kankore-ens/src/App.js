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
  const needLabel = ["とても欲しい", "結構ほしい", "どちらでもない", "少し欲しい", "全くいらない"];
  const [enseiHour, setEnseiHour] = React.useState(1);
  const [enseiMinutes, setEnseiMinutes] = React.useState(0);
  const [needFuel, setNeedFuel] = React.useState(2);
  const [needBullet, setNeedBulle] = React.useState(2);
  const [needSteel, setNeedSteel] = React.useState(2);
  const [needBauxite, setNeedBauxite] = React.useState(2);

  const changeEnseiHour = event => {
    setEnseiHour(event.target.value);
  };
  const changeEnseiMinutes = event => {
    setEnseiMinutes(event.target.value);
  };
  const changeFuel = event => {
    setNeedFuel(event.target.value);
  };
  const changeBulle = event => {
    setNeedBulle(event.target.value);
  };
  const changeSteel = event => {
    setNeedSteel(event.target.value);
  };
  const changeBauxite = event => {
    setNeedBauxite(event.target.value);
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
            <InputLabel>時間</InputLabel>
            <Select
              value={enseiHour}
              onChange={changeEnseiHour}
            >
              {
                hourList.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={x}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
          <InputLabel>分</InputLabel>
            <Select
              value={enseiMinutes}
              onChange={changeEnseiMinutes}
            >
              {
                minutesList.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={x}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>燃料</InputLabel>
            <Select
              value={needFuel}
              onChange={changeFuel}
            >
              {
                needLabel.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={needLabel.length - id - 1}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
          <InputLabel>弾薬</InputLabel>
            <Select
              value={needBullet}
              onChange={changeBulle}
            >
              {
                needLabel.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={needLabel.length - id - 1}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>鋼材</InputLabel>
            <Select
              value={needSteel}
              onChange={changeSteel}
            >
              {
                needLabel.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={needLabel.length - id - 1}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel>ボーキサイト</InputLabel>
            <Select
              value={needBauxite}
              onChange={changeBauxite}
            >
              {
                needLabel.map((x, id) =>{
                  return (
                    <MenuItem key={id} value={needLabel.length - id - 1}>{x}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
