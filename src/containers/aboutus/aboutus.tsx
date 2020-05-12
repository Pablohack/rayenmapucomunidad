import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './aboutus.css';
export default function AboutUs() {
    return (
        <Box>
            <Box>
                <h1 className="title">Quienes Somos</h1>
            </Box>
            <Box className="spaceWork">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Typography className="paragraph">La comunidad de padres y apoderados de Sala cuna y Jardín  Infantil RAYEN MAPU, luego de ver la necesidad imperiosa de continuar conectados y potenciando la Educación Inicial, de sus hijos e hijas en tiempos de PANDEMIA, por virus COVID 19; crea y diseña una página de fácil acceso a las familias,
                    que permite ordenar y tener  al servicio de ellos y sus hij@s en  cada momento.</Typography>
                    <Typography className="paragraph">
                        Se invita al personal Educativo del Jardín Directora, Educadoras y Técnicos en párvulos a subir experiencias educativas enriquecedoras para aprovechar al máximo la instancia del aprendizaje, trabajo en familia y el desarrollo del gusto por la lectura, artes y ciencia.
                        Para ello el cuerpo docente, ha elaborado experiencias educativas basadas en el Método Montessori y en el Sello Distintivo del Jardín que es la música y el arte.
                    </Typography>
                    <Typography className="paragraph">Así también, considera importante que estas experiencias sean lúdicas de corto tiempo y fáciles de aplicar en cuanto a tiempo y recursos.
                    Para facilitar a muchas familias que están en este momento en trabajo y al
                    Cuidado de sus hijos e hijas en sus hogares.
                    </Typography>
                    <Typography className="paragraph">Lo que buscamos es estar siempre conectados, unidos y desarrollar otras formas de continuar adelante, 
                    de cuidarnos entre todos y de acomodarnos a esta realidad.</Typography>
                </Grid>
            </Box>
        </Box>
    );
}