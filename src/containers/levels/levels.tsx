import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Accordion from '../../components/common/accordion'
export default function Levels() {
    return (
        <Box>
        <Box>
            <h1 className="title">Niveles</h1>
        </Box>
            <Box className="spaceWork">
                <Accordion level="Medio Menor" parvularia={[{name:"juanito peres 2"}]}></Accordion>
                <Accordion level="Medio Mayor" parvularia={[{name:"juanito peres 2"}]}></Accordion>
            {/* <Grid container direction="row" justify="flex-start" alignItems="center">

            </Grid> */}
        </Box>
    </Box>
    );
}