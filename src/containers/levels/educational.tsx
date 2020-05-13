import React from 'react'
import '../style.css'
import { Box } from '@material-ui/core/';

export default function EducationalMaterial(props: any) {
    let nivel: string = props.location.pathname.split("/");
    console.log(nivel[2])
    let curso: string = "";
    switch(nivel[2]) { 
        case "salacunamenor": { 
            curso="Sala Cuna Menor"
           break; 
        } 
        case "salacunamayor": { 
            curso="Sala Cuna Mayor"

           break; 
        }
        case "mediomenor": { 
            curso="Medio Menor"

           break; 
        } 
        case "mediomayor": { 
            curso="Medio Mayor"
           break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
     }


    return (
        <Box>
            <h1 className="title">Material didactico del nivel :  {curso}</h1>
        </Box>
    );
}