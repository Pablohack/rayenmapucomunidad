import React from 'react';
import VideoPlayer from '../../components/videoplayer/videoPlayer';
import Accordion from '../../components/common/accordion'
import { makeStyles } from '@material-ui/core/styles';
import { Box, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, List, ListItem, ListItemText } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IAccordion } from '../../containers/Interfaces/Interfaces'
import { Link, NavLink } from 'react-router-dom'
import '../style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 50px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    body: {
        backgroundColor: '#F3F3F3',
        height: '400px',
        alignContent: 'center'
    }
}));

export default function VideoLayout() {
    const classes = useStyles();

    return (
        <Box className="spaceVideo">
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>04-05-2020 Montessori: Troquelar</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/B7usnQ6bVo0'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>04-05-2020 Jugarte: el ratoncito</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/Zaqzba-5aL8'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>04-05-2020 Montessori: Arte</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/Q6_GECPO_jA'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>05-05-2020 Cuento de Humberto</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://www.youtube.com/watch?v=Xk1cgYQKlbs'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>05-05-2020 Oficio de panadera parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/4aGPHUo7pTk'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>05-05-2020 Oficio de panadera parte 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://www.youtube.com/watch?v=9zgiVhss2IE'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>05-05-2020 Vida practica</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/fO5QMIyAl40'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>06-05-2020 Vida Practica: sub área cuidado medio ambiental</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/cnzwr7Wu5Ks'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>06-05-2020 Oficio: Veterinario</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/rZAqjeATaTY'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>06-05-2020 Cuento kamichibai pulpo</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/-T6O08Hg-mc'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>07-05-2020 Oficio Artesana parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/YxWSI04vMLk'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>07-05-2020 Oficio Artesana parte 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/rImFy57V-Gk'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>07-05-2020 Matematicas Parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/qyKXIl4_F5I'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>07-05-2020 Matematicas Parte 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/Ejy6PKVp92U'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-05-2020 Temperatura Sensorial Temperatura parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/EaJkXnR8QIY'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-05-2020 Temperatura Sensorial Temperatura parte 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/JO90rR-F3ek'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-05-2020 SENSORIAL AREA VISUAL OTOÑO </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/9vYLLLxtPZ8'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-05-2020 Cuento sorpresa en la selva</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/ItjudAdtL4E'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>11-05-2020 Perdi mi calcetin</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/JhU6QMGlYDs'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>11-05-2020 Cuento el osito y sus fotos</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/SdoCfobLSEI'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>11-05-2020 Montessori Trasvasijar</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/nYHEE325hTw'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>12-05-2020 Cuento de Chile crece contigo</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/cXggd83QMRQ'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>12-05-2020 Vida practica "Cortar Frutas"</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/W3LF6u8YpOw'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>13-05-2020 Gira Girasol</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/Sf8yl1d7DWI'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>13-05-2020 Mes del mar Creando un Acuario Parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/BbpH13Cjed4'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>13-05-2020 Teatro de Titeres</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/EXFtUeg-w68'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>14-05-2020Preguntas Humberto y sus vacaciones Parte 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/niUunyrf1jk'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>14-05-2020 Matemática experimento </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/ltj5sCmZZQE'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>14-05-2020 Cuento Humberto y sus vacaciones</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/6cYzZfREQdY'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>18-05-2020 Vida practica cernir </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/B9Q2UJpBfYY'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>18-05-2020 Cuento cosita linda</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/kpZ_XIOJ-Q0'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>19-05-2020 Sacar cascara de la fruta</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/gOMjGrvApes'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>24-05-2020 Montessori: Flota o no flota</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/AJ1q-YTJqvE'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>25-05-2020 Cuidados del mar</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/zLGEmIOyFDU'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>26-05-2020 Cuento la casa de la oveja Maria</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/O-8YQ5flmDM'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>26-05-2020 Pelar y moler platanos</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/SEk0GuCltGA'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>26-05-2020 Sensorial del gusto </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/dQsxMTb1zY4'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>28-05-2020 Cuento la sorpresa</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/11yWSTu7qXs'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>28-05-2020 Antifaz mes del mar </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/u25NCHvZ5y0'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>29-05-2020 Cuento conejo y sombrero</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/SD9ZxjIvd1M'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>29-05-2020 Exprimir limones  Montessori</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/zWAsT_Wf_kc'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>01-06-2020 Arte: elaborar marioneta con material reciclado</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/3fnWASlS5oM'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>02-06-2020 Montessori: Lenguaje descriptivo</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/X2dyTDxKLSI'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>03-06-2020 Efemerides: No al tabaco</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/-6ev0ixFeGs'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-06-2020 Estampados con citricos</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/eNzODdr_dkk'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>08-06-2020 Montessori: Untar pan o galleta</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/KtBolYDoGcs'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>10-06-2020 Higiene bucal</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/RQwHO47okus'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>11-06-2020 Teatro de sombras "Ratita presumida"</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/mkBBMUOYOlw'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>15-06-2020 Ciencias Estaciones del Año</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/d3grq1iBT8A'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>16-06-2020  Montessori Tablitas de colores</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/DPc5bRvohxA'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>17-06-2020 Higiene bucal: lavado de muelas</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/QRr_hfcxIJQ'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>18-06-2020 discriminación sensorial de figuras geometricas</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/X6mDEeGSTwE'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>19-06-2020 Cuento la oveja de pablo</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/NJaL0f-_3Eo'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>19-06-2020 Montessori: Arte de invierno</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/9tzi2shzQsE'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

        </Box>

    );
}



