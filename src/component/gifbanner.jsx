import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius:'10px',
});

export default function Banner(props) {
  return (
   
      <Grid item xs={12} sm lg={12}  >
        
            <Img alt="complex" src={props.image} />
      </Grid>
  );
}
