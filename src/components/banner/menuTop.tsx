import React from 'react';
import { Box, Grid } from '@material-ui/core';
import '../style/banner.css';
export default function MenuTop() {

    return (
        <Box className="menuBody">
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <div className="menuOption">
                    <p className="textMenu">Inicio</p>
                </div>
                <div className="menuOption">
                    <p className="textMenu">Quienes Somos</p>
                </div>
                <div className="menuOption">
                    <p className="textMenu">Niveles</p>
                </div>
                <div className="menuOption">
                    <p className="textMenu">Centro de Padres</p>
                </div>
                
                <div className="menuOption">
                    <p className="textMenu">Metodología</p>
                </div>
            </Grid>
        </Box>
    );
}