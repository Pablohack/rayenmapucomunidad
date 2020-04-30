import React from 'react';
import Banner from '../components/banner/banner';
import { Box } from '@material-ui/core';
import './style.css'
export default function Inicio() {
    return (
        <Box>
            <Banner></Banner>
            <Box>
                <h1 className="title">Noticias Destacada</h1>
            </Box>
        </Box>
    );
}