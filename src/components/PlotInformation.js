import * as React from 'react';
import CustomizedInputBase from './CustomizedInputBase';
import { Box } from '@mui/material';
import PlotSearchGrid from './PlotSearchGrid';

export default function PlotInformation(){
    return(
        <>
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100h"
    >
        <CustomizedInputBase />
    </Box>
    <Box paddingY={5}>
    <PlotSearchGrid />
    </Box>
    </>
    )
}