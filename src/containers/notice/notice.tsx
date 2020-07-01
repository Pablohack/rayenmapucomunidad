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
                        <NoticeCard imagen="not1.jpg" extract="Nuevamente el sello 100 por ciento social, con la salud como bandera, prevaleció en la gestión de la alcaldesa Cathy Barriga..." link="//www.municipalidadmaipu.cl/alcaldesa-cathy-barriga-presento-cuenta-publica-de-la-gestion-2019/"></NoticeCard>
                    </Box>
                    <Box className="notice">
                        <NoticeCard imagen="not3.jpg" extract="Noticias relacionadas a la comuna de maipu, difundidas desde la pagina oficial de la municipalidad de Maipu." link="//www.municipalidadmaipu.cl/category/noticia/"></NoticeCard>
                    </Box>
                    <Box className="notice">
                        <NoticeCard imagen="not4.jpg" extract="La Intendencia de Educación Parvularia se crea el año 2016, como una instancia técnica de alta especialidad en el nivel educativo, inserta en la Superintendencia de Educación." link="//www.supereduc.cl/educacion-parvularia/"></NoticeCard>
                    </Box>
                    <Box className="notice">
                        <NoticeCard imagen="not2.jpg" extract="Fundación CAP promueve el desarrollo de Chile y sus habitantes a través de proyectos concretos e innovadores en educación." link="//www.fundacioncap.cl/aprender-en-familia-parvulario/"></NoticeCard>
                    </Box>

                </Grid>
            </Box>
        </Box>
    );
}