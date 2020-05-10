import React from 'react';
import { Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import NinmuList from './Ninmu';

function Search(props) {
  const [showNinmu, setShowNinmu] = React.useState([]);
  const filter = () => {
    console.log(props);
    setShowNinmu(NinmuList);
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={filter}>
          検索
        </Button>
      </Grid>
      { showNinmu.length === 0 &&
        <Grid item xs={12}>
          ここに結果が表示されます
        </Grid>
      }
      { showNinmu.length > 0 &&
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="result table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">No.</TableCell>
                  <TableCell align="right">遠征名</TableCell>
                  <TableCell align="right">時間</TableCell>
                  <TableCell align="right">Exp</TableCell>
                  <TableCell align="right">燃料</TableCell>
                  <TableCell align="right">弾薬</TableCell>
                  <TableCell align="right">鋼材</TableCell>
                  <TableCell align="right">ボーキ</TableCell>
                  <TableCell align="right">旗艦Lv</TableCell>
                  <TableCell align="right">艦隊数</TableCell>
                  <TableCell align="right">必要艦</TableCell>
                  <TableCell align="right">備考</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showNinmu.map((ninmu) => {
                  return (
                    <TableRow key={ninmu.no}>
                      <TableCell align="right">{ninmu.no}</TableCell>
                      <TableCell align="right">{ninmu.name}</TableCell>
                      <TableCell align="right">{ninmu.time}</TableCell>
                      <TableCell align="right">{ninmu.exp}</TableCell>
                      <TableCell align="right">{ninmu.fuel}</TableCell>
                      <TableCell align="right">{ninmu.bullet}</TableCell>
                      <TableCell align="right">{ninmu.steel}</TableCell>
                      <TableCell align="right">{ninmu.bauxite}</TableCell>
                      <TableCell align="right">{ninmu.needHeadLv}</TableCell>
                      <TableCell align="right">{ninmu.needNum}</TableCell>
                      <TableCell align="right">{ninmu.needKanmusu}</TableCell>
                      <TableCell align="right">{ninmu.remarks}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      }
    </Grid>
  )
}

export default Search;
