import React from 'react';
import { Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import NinmuList from './Ninmu';

function Search(props) {
  const [showNinmu, setShowNinmu] = React.useState([]);
  const filter = () => {
    // 遠征に出す時間を満たす遠征だけを選別
    let canNinmuList = NinmuList.filter((ninmu)=>{
      return props.time >= ninmu.time;
    });
    // 残った遠征にポイント付けをしていく
    canNinmuList = canNinmuList.map((ninmu)=>{
      ninmu.point = (props.fuel*ninmu.fuel) + (props.bullet*ninmu.bullet)
        + (props.steel*ninmu.steel) + (props.bauxite*ninmu.bauxite);
      return ninmu;
    });
    setShowNinmu(canNinmuList);
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
                  <TableCell align="right">Point</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showNinmu.map((ninmu) => {
                  return (
                    <TableRow key={ninmu.no}>
                      <TableCell align="right">{ninmu.no}</TableCell>
                      <TableCell align="right">{ninmu.name}</TableCell>
                      <TableCell align="right">{Math.floor(ninmu.time/60)}時間{ninmu.time%60}分</TableCell>
                      <TableCell align="right">{ninmu.exp}</TableCell>
                      <TableCell align="right">{ninmu.fuel}</TableCell>
                      <TableCell align="right">{ninmu.bullet}</TableCell>
                      <TableCell align="right">{ninmu.steel}</TableCell>
                      <TableCell align="right">{ninmu.bauxite}</TableCell>
                      <TableCell align="right">{ninmu.needHeadLv}</TableCell>
                      <TableCell align="right">{ninmu.needNum}</TableCell>
                      <TableCell align="right">{ninmu.needKanmusu}</TableCell>
                      <TableCell align="right">{ninmu.remarks}</TableCell>
                      <TableCell align="right">{ninmu.point}</TableCell>
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
