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
                        <NoticeCard imagen="not2.jpg" extract="Como JUNJI queremos estar cerca de las familias, más aún, en tiempos donde debemos cuidarnos entre todos. Compartimos con ustedes algunos consejos que lo pueden ayudar." link="//www.junji.gob.cl/2020/03/13/consejos-para-estar-en-casa-con-ninos-y-ninas/"></NoticeCard>
                    </Box>
                    <Box className="notice">
                    <NoticeCard imagen="not3.jpg" extract="Mimos, reciclaje, pintura, música y mucho más podrás conocer en estas entretenidas actividades que puedes realizar junto niños y niñas en casa." link="//www.junji.gob.cl/2020/03/15/del-jardin-a-la-casa/"></NoticeCard>
                    </Box>
                    <Box className="notice">
                    <NoticeCard imagen="not4.jpg" extract="Revisa la temporada completa de este interesante programa conducido por Ignacio Franzani y que fue transmitido en horario matinal por Televisión Nacional de Chile." link="//www.junji.gob.cl/2020/03/11/la-aventura-de-crecer/"></NoticeCard>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
}