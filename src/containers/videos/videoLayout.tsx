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
                        <Typography className={classes.heading}>Cuento de Humberto</Typography>
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
                        <Typography className={classes.heading}>Oficio de panadera parte 1</Typography>
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
                        <Typography className={classes.heading}>Oficio de panadera parte 2</Typography>
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
                        <Typography className={classes.heading}>Vida practica</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/fO5QMIyAl40'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Vida Practica: sub área cuidado medio ambiental</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/cnzwr7Wu5Ks'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div> <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Cuento kamichibai pulpo</Typography>
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
                        <Typography className={classes.heading}>Oficio Artesana parte 1</Typography>
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
                        <Typography className={classes.heading}>Oficio Artesana parte 2</Typography>
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
                        <Typography className={classes.heading}>Matematicas Parte 1</Typography>
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
                        <Typography className={classes.heading}>Matematicas Parte 2</Typography>
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
                        <Typography className={classes.heading}>Temperatura Sensorial Temperatura parte 1</Typography>
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
                        <Typography className={classes.heading}>Temperatura Sensorial Temperatura parte 2</Typography>
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
                        <Typography className={classes.heading}>SENSORIAL AREA VISUAL OTOÑO </Typography>
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
                        <Typography className={classes.heading}>Cuento sorpresa en la selva</Typography>
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
                        <Typography className={classes.heading}>Perdi mi calcetin</Typography>
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
                        <Typography className={classes.heading}>Cuento el osito y sus fotos</Typography>
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
                        <Typography className={classes.heading}>Cuento de Chile crece contigo</Typography>
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
                        <Typography className={classes.heading}>Vida practica "Cortar Frutas"</Typography>
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
                        <Typography className={classes.heading}>Vida practica "Cortar Frutas"</Typography>
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
                        <Typography className={classes.heading}>Gira Girasol</Typography>
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
                        <Typography className={classes.heading}>Mes del mar Creando un Acuario Parte 1</Typography>
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
                        <Typography className={classes.heading}>Teatro de Titeres</Typography>
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
                        <Typography className={classes.heading}>Preguntas Humberto y sus vacaciones Parte 1</Typography>
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
                        <Typography className={classes.heading}>Matemática experimento </Typography>
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
                        <Typography className={classes.heading}>Cuento Humberto y sus vacaciones</Typography>
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
                        <Typography className={classes.heading}>Vida practica cernir </Typography>
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
                        <Typography className={classes.heading}>Cuento cosita linda</Typography>
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
                        <Typography className={classes.heading}>Sacar cascara de la fruta</Typography>
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
                        <Typography className={classes.heading}>Cuento la casa de la oveja Maria</Typography>
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
                        <Typography className={classes.heading}>Sensorial del gusto </Typography>
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
                        <Typography className={classes.heading}>Cuento la sorpresa</Typography>
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
                        <Typography className={classes.heading}>Antifaz mes del mar </Typography>
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
                        <Typography className={classes.heading}>Cuento conejo y sombrero</Typography>
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
                        <Typography className={classes.heading}>Exprimir limones  Montessori</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.body}>
                        <VideoPlayer link='https://youtu.be/zWAsT_Wf_kc'></VideoPlayer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Box>

    );
}



