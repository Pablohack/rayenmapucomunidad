import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './methodology.css';
import maria from '../../utilities/img/mariamont.jpg';
export default function Methodology() {
    return (
        <Box>
            <Box>
                <h1 className="title">Metodologia</h1>
            </Box>
            <Box className="spaceWork">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Typography className="paragraph">
                        El método Montessori es un método educativo que está basado en la estimulación y el respeto. Se caracteriza por preparar un ambiente,
                        que sea ordenado, simple, real, estético y donde cada elemento forma parte en el desarrollo de los niños. Este método educativo hace especial
                        hincapié en las actividades que son dirigidas a niños, así como observarlos por parte del profesor.
                </Typography>
                <Typography className="paragraph">
                        La principal característica de este método es
                        conseguir liberar el potencial de cada niño para que se autodesarrolle por sí solo. En un ambiente bien estructurado y que aprendan a hacer las cosas
                        por sí solos, siguiendo sus motivaciones y el ritmo de cada uno. Intenta no ser el que transmita los conocimientos en el aula, sino haz que sea un
                        ambiente donde la inteligencia y la parte psíquica del niño se desarrolle a través de un trabajo libre, con un adecuado material didáctico.
                </Typography>
                    <Grid>
                        <img src={maria}/>
                    </Grid>
                </Grid>


            </Box>
        </Box>
    );
}