import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ShowResult from './ShowResult'
import Ninmu from './Ninmu';

function Search(props) {
  const [showNinmu, setShowNinmu] = React.useState([]);
  const filter = () => {
    console.log(props);
    setShowNinmu();
    console.log(Ninmu);
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={filter}>
          検索
        </Button>
      </Grid>
      <ShowResult
        list={showNinmu}
      />
    </Grid>
  )
}

export default Search;
