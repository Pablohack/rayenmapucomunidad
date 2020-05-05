import React from 'react';
import { Box, Grid } from '@material-ui/core';

export default function ParentCenters() {
    return (
        <Box>
            <Box>
                <h1 className="title">Información centro de padres</h1>
            </Box>
            <Box className="spaceWork">
                <Grid container direction="row" justify="flex-start" alignItems="center">

                </Grid>
            </Box>
        </Box>
    );
}