import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PlotCard from "./PlotCard"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PlotSearchGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} alignContent={"center"}>
        <Grid xs={4} md={4}>
        <PlotCard />
        </Grid>
        <Grid xs={4} md={4}>
        <PlotCard />
        </Grid>
        <Grid xs={4} md={4}>
        <PlotCard />
        </Grid>
        <Grid xs={4} md={4}>
        <PlotCard />
        </Grid>
      </Grid>
    </Box>
  );
}
