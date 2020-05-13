import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';

import '../style.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));
export default function ParentCenters() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <Box>
            <Box>
                <h1 className="title">Contenido Aprendiendo en Familia</h1>
            </Box>
            <Box className="spaceWork">
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <Link className="textlink" to="/pdf/MFCSemana4.pdf" target="_blank">Monstruo Rosa</Link>
                            </ListItem>,
                        </List>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <Link className="textlink" to="/pdf/MFCSemana3Creole.pdf" target="_blank">Mis primeros opuestos Creole</Link>
                            </ListItem>,
                        </List>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <Link className="textlink" to="/pdf/MFCSemana3Español.pdf" target="_blank">Cuento Una historia de la liebre de pascua Español</Link>
                            </ListItem>,
                        </List>
                    </div>
                </Grid>             

            </Box>
        </Box>

    );
}