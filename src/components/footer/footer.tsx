import React from "react";
import { Grid } from '@material-ui/core'
import "../style/footer.scss";
export default function Footer() {

  return (
    <Grid className="containerFooter" >
      <Grid className="footerBody" container direction="row" justify="space-between" alignItems="center">
        <Grid className='footerBlockLeft'>
          <ul>
            <a href="Https://parvularia.mineduc.cl" className="linkFooter">
              Educación Parvularia
              </a>
            <br />
            <a href="https://curriculumnacional.mineduc.cl/estudiante/621/w3-channel.html" className="linkFooter">
              Aprendiendo en línea
              </a>
          </ul>
        </Grid>
        <Grid className='footerBlockCenter'>
          <p className="titleFooter">Enlaces de interes</p>
        </Grid>
        <Grid className='footerBlockRight'>
          <ul>
            <a href="http://www.codeduc.cl/" className="linkFooter">
              Codeduc
          </a>
            <br />
            <a href="http://www.crececontigo.gob.cl/" className="linkFooter">Crece Contigo</a>
          </ul>
        </Grid>
      </Grid>
    </Grid>

  );
}
