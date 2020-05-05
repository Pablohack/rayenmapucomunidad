import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import '../style/banner.css';
export default function MenuTop() {

    return (
        <Box className="menuBody">
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <div className="menuOption borderRight">
                    <Link to="/inicio" className="textMenu">Inicio</Link>
                </div>
                <div className="menuOption borderRight">
                    <Link to="/quienessomos" className="textMenu">Quienes Somos</Link>
                </div>
                <div className="menuOption borderRight">
                    <Link to="/niveles" className="textMenu">Niveles</Link>
                </div>
                <div className="menuOption borderRight">
                    <Link to="/centropadres" className="textMenu">Centro de Padres</Link>
                </div>
                <div className="menuOption">
                    <Link to="/metodologia" className="textMenu">Metodología</Link>
                </div>
            </Grid>
        </Box>
    );
}