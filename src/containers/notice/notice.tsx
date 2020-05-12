import React from 'react';
import { Box, Grid } from '@material-ui/core';
import NoticeCard from '../../components/noticeCard/noticeCard';
import '../style.css'


export default function Notices() {
    return (
        <Box>
            <Box>
                <h1 className="title">Noticias Destacada</h1>
            </Box>
            <Box className="spaceWork">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Box className="notice">
                        <NoticeCard imagen="noticeCov.jpeg" extract="Nuevamente el sello 100 por ciento social, con la salud como bandera, prevaleció en la gestión de la alcaldesa Cathy Barriga..." link="http://www.municipalidadmaipu.cl/alcaldesa-cathy-barriga-presento-cuenta-publica-de-la-gestion-2019/"></NoticeCard>
                    </Box>
                    {/* <Box className="notice">
                        <NoticeCard></NoticeCard>
                    </Box>
                    <Box className="notice">
                        <NoticeCard></NoticeCard>
                    </Box>
                    <Box className="notice">
                        <NoticeCard></NoticeCard>
                    </Box> */}
                </Grid>
            </Box>
        </Box>
    );
}