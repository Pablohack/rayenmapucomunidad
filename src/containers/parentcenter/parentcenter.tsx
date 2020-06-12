import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import { makeStyles } from "@material-ui/core/styles";

import "../style.css";
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
                <Link
                  className="textlink"
                  to="/pdf/MFCSemana4.pdf"
                  target="_blank"
                >
                  Monstruo Rosa
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/MFCSemana3Creole.pdf"
                  target="_blank"
                >
                  Mis primeros opuestos Creole
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/MFCSemana3Español.pdf"
                  target="_blank"
                >
                  Cuento Una historia de la liebre de pascua Español
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/eligecuento.pdf"
                  target="_blank"
                >
                  Esta semana selecciona el cuento que deseas leer!
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/miffamiliacuento.pdf"
                  target="_blank"
                >
                  Cuento de mi familiar
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/cariñosoysensible.pdf"
                  target="_blank"
                >
                  El valor del cuidado cariñoso y sensible
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/vidadeperroscarnavaldeanimales.pdf"
                  target="_blank"
                >
                  Elige tu cuento: Carnaval de animales o Vida de perros
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/1cuentoaldia.pdf"
                  target="_blank"
                >
                  Mi familia cuenta 1 cuento al día
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/felizdiadellibro.pdf"
                  target="_blank"
                >
                  Feliz día del libro!
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/nuevocuentosemana9.pdf"
                  target="_blank"
                >
                  Nuevo cuentos para leer!
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/desgasteprofesional.pdf"
                  target="_blank"
                >
                  Enfrentar y prevenir el desgaste profesional
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/semana6.pdf"
                  target="_blank"
                >
                  La lectura lleva a mundos desconocidos e inimaginables
                </Link>
              </ListItem>
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
                <Link
                  className="textlink"
                  to="/pdf/semana3español.pdf"
                  target="_blank"
                >
                  Mas cuentos para ver: Mi primeros opuestos español
                </Link>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Box>
    </Box>
  );
}
