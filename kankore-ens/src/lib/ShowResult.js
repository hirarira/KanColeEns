import React from 'react';
import { Grid } from '@material-ui/core';

function ShowResult(props) {
  return (
    <Grid container spacing={3}>
      { props.list.length === 0 &&
        <Grid item xs={12}>
          ここに結果が表示されます: 
          {props.list.length}
        </Grid>
      }
      { props.list.length > 0 &&
        <Grid item xs={12}>
          {props.list}
        </Grid>
      }
    </Grid>
  )
}

export default ShowResult;
