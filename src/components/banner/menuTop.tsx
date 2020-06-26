import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../style/banner.scss";
export default function MenuTop() {
  return (
    <Box className="menuBody">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <div className="menuOption borderRight">
          <Link to="/inicio" className="textMenu">
            Inicio
          </Link>
        </div>
        <div className="menuOption borderRight">
          <Link to="/quienessomos" className="textMenu">
            Quienes Somos
          </Link>
        </div>
        <div className="menuOption borderRight">
          <Link to="/niveles" className="textMenu">
            Niveles
          </Link>
        </div>
        <div className="menuOption borderRight">
          <Link to="/image" className="textMenu">
            Álbum
          </Link>
        </div>
        <div className="menuOption borderRight">
          <Link to="/videos" className="textMenu">
            VideoTeca
          </Link>
        </div>
        <div className="menuOption borderRight">
          <Link to="/aprenderfamilia" className="textMenu">
            Aprender en Familia
          </Link>
        </div>
        <div className="menuOption">
          <Link to="/metodologia" className="textMenu">
            Metodología
          </Link>
        </div>
      </Grid>
    </Box>
  );
}
