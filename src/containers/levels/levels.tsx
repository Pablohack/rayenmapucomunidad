import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Accordion from '../../components/common/accordion'
import { ITeacher } from '../Interfaces/Interfaces'
export default function Levels() {

    let SalaCunaMenor: ITeacher[] = [{cargo:'',name:''}];
    SalaCunaMenor.push({ cargo: 'Educadora', name: "Educadora1" });
    SalaCunaMenor.push({ cargo: 'Tecnico parvularia', name: "Tecnico1" });

    let SalaCunaMayor: ITeacher[] = [{cargo:'',name:''}];
    SalaCunaMayor.push({ cargo: 'Educadora', name: "Educadora1" });
    SalaCunaMayor.push({ cargo: 'Tecnico parvularia', name: "Tecnico1" });

    let MedioMenor: ITeacher[] = [{cargo:'',name:''}];
    MedioMenor.push({ cargo: 'Educadora', name: "Educadora1" });
    MedioMenor.push({ cargo: 'Tecnico parvularia', name: "Tecnico1" });
    
    let MedioMayor: ITeacher[] = [{cargo:'',name:''}];
    MedioMayor.push({cargo:'Educadora',name:"Claudia"});
    MedioMayor.push({cargo:'Tecnico parvularia',name:"Ninoska"});

    return (
        <Box>
            <Box>
                <h1 className="title">Niveles</h1>
            </Box>
            <Box className="spaceWork">
                {/* <Accordion data={v} level="Sala Cuna Menor"  ></Accordion>
                <Accordion data={v} level="Sala Cuna Mayor" ></Accordion> */}
                <Accordion data={SalaCunaMenor} level="Sala Cuna Menor" link="salacunamenor" ></Accordion>
                <Accordion data={SalaCunaMayor} level="Sala Cuna Mayor" link="salacunamayor" ></Accordion>
                <Accordion data={MedioMayor} level="Medio Menor" link="mediomenor" ></Accordion>
                <Accordion data={MedioMenor} level="Medio Mayor" link="mediomayor"></Accordion>

                {/* <Grid container direction="row" justify="flex-start" alignItems="center">

            </Grid> */}
            </Box>
        </Box>
    );
}