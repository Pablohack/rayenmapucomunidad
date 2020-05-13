import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Accordion from '../../components/common/accordion'
import { ITeacher } from '../Interfaces/Interfaces'
export default function Levels() {

    let SalaCunaMenor: ITeacher[] = [{cargo:'',name:''}];
    SalaCunaMenor.push({ name: 'Elizabeth Muñoz Aguero', cargo: "Educadora" });
    SalaCunaMenor.push({ name: 'Dominique Ruz', cargo: "Tecnico parvularia" });
    SalaCunaMenor.push({ name: 'Isabel Guajardo', cargo: "Tecnico parvularia" });
    SalaCunaMenor.push({ name: 'Olga Contreras', cargo: "Tecnico parvularia" });

    let SalaCunaMayor: ITeacher[] = [{cargo:'',name:''}];
    SalaCunaMayor.push({ name: 'Jéssica Jiménez Vega', cargo: "Educadora" });
    SalaCunaMayor.push({ name: 'Erika Gonzalez', cargo: "Tecnico parvularia" });
    SalaCunaMayor.push({ name: 'Katherine Iturra', cargo: "Tecnico parvularia" });
    SalaCunaMayor.push({ name: 'Valerie Orellana', cargo: "Tecnico parvularia" });

    let MedioMenor: ITeacher[] = [{cargo:'',name:''}];
    MedioMenor.push({ name: 'Loreto Elgueda Uribe', cargo: "Educadora" });
    MedioMenor.push({ name: 'Evangelina Caceres', cargo: "Tecnico parvularia" });
    MedioMenor.push({ name: 'Carmen Palacios', cargo: "Tecnico parvularia" });
    MedioMenor.push({ name: 'Claudia Jara', cargo: "Tecnico parvularia" });

    
    let MedioMayor: ITeacher[] = [{cargo:'',name:''}];
    MedioMayor.push({name:'Claudia Alfaro Riquelme',cargo:"Educadora"});
    MedioMayor.push({name:'Ninoska Garrido',cargo:"Tecnico parvularia"});
    MedioMayor.push({name:'Romina Habach',cargo:"Tecnico parvularia"});
    MedioMayor.push({name:'Fernanda Parra',cargo:"Tecnico parvularia"});

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