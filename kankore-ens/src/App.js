import React from 'react';
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import './App.css';

function App() {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [enseiHour, setEnseiHour] = React.useState('');
  const handleChange = event => {
    setEnseiHour(event.target.value);
  };
  return (
    <div className="App">
      <h2 className="header">艦これ　遠征支援プログラム ver2.0</h2>
      遠征に出す時間：
      <FormControl className={classes.formControl}>
        <InputLabel id="enseiHour">時間</InputLabel>
        <Select
          labelId="enseiHour"
          id="enseiHourSelect"
          value={enseiHour}
          onChange={handleChange}
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
    </div>
  );
}

export default App;
