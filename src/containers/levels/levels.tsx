import React from "react";
import { Box, Grid, ListItem, ListItemText } from "@material-ui/core";
import Accordion from "../../components/common/accordion";
import { ITeacher } from "../Interfaces/Interfaces";
export default function Levels() {
  let SalaCunaMenor: ITeacher[] = [{ cargo: "", name: "" }];
  SalaCunaMenor.push({ name: "Elizabeth Muñoz Aguero", cargo: "Educadora" });
  SalaCunaMenor.push({ name: "Dominique Ruz", cargo: "Tecnico parvularia" });
  SalaCunaMenor.push({ name: "Isabel Guajardo", cargo: "Tecnico parvularia" });
  SalaCunaMenor.push({ name: "Olga Contreras", cargo: "Tecnico parvularia" });

  let SalaCunaMayor: ITeacher[] = [{ cargo: "", name: "" }];
  SalaCunaMayor.push({ name: "Jéssica Jiménez Vega", cargo: "Educadora" });
  SalaCunaMayor.push({ name: "Erika Gonzalez", cargo: "Tecnico parvularia" });
  SalaCunaMayor.push({ name: "Katherine Iturra", cargo: "Tecnico parvularia" });
  SalaCunaMayor.push({ name: "Valerie Orellana", cargo: "Tecnico parvularia" });

  let MedioMenor: ITeacher[] = [{ cargo: "", name: "" }];
  MedioMenor.push({ name: "Loreto Elgueda Uribe", cargo: "Educadora" });
  MedioMenor.push({ name: "Evangelina Caceres", cargo: "Tecnico parvularia" });
  MedioMenor.push({ name: "Carmen Palacios", cargo: "Tecnico parvularia" });
  MedioMenor.push({ name: "Claudia Jara", cargo: "Tecnico parvularia" });

  let MedioMayor: ITeacher[] = [{ cargo: "", name: "" }];
  MedioMayor.push({ name: "Claudia Alfaro Riquelme", cargo: "Educadora" });
  MedioMayor.push({ name: "Ninoska Garrido", cargo: "Tecnico parvularia" });
  MedioMayor.push({ name: "Romina Habach", cargo: "Tecnico parvularia" });
  MedioMayor.push({ name: "Fernanda Parra", cargo: "Tecnico parvularia" });

  return (
    <Box>
      <Box>
        <h1 className="title">Niveles</h1>
      </Box>
      <Box className="spaceWork">
        {/* <Accordion data={v} level="Sala Cuna Menor"  ></Accordion>
                <Accordion data={v} level="Sala Cuna Mayor" ></Accordion> */}
        <Accordion
          data={SalaCunaMenor}
          level="Sala Cuna Menor"
          linkInterview="//docs.google.com/forms/d/1wkCdRQjG3SqkYGmHyuB0MZp8JiN9M3WZl-JPA4xOP_c/"
          link="//drive.google.com/drive/folders/1-IwZ0iPSd1qnDuJ7W6jqnO9htwZOyckB"
        ></Accordion>
        <Accordion
          data={SalaCunaMayor}
          level="Sala Cuna Mayor"
          linkInterview="//docs.google.com/forms/d/1r8u4wk2NdyovlZDbWhkbrbzv8OK5UXFrwMsrtnDSCJs/edit"
          link="//drive.google.com/drive/folders/1OC2py0RY3InRP-YhEP7bBL9et7xsqG3s"
        ></Accordion>
        <Accordion
          data={MedioMenor}
          level="Medio Menor"
          linkInterview="//docs.google.com/forms/d/1zkDYHgzIcu09lGWw7uEftN5pJlLXXN7tmfzgrYTUR1Q/edit"
          link="//drive.google.com/drive/folders/1gLUADuE82pEAyhkK_HDL2x1e3qHOgagG"
        ></Accordion>
        <Accordion
          data={MedioMayor}
          level="Medio Mayor"
          linkInterview="//docs.google.com/forms/d/1ET1HirMJCECv3BpKm5Xa9ZBzHjxW_QHk-vRteZ-JWXg"
          link="//drive.google.com/drive/folders/1LPpeAX8T2FTqPP7r_HaIUepj4Ub9J6om"
        ></Accordion>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <ListItem button>
            <p>
              <a
                href="//docs.google.com/forms/d/1IPbrETr58l5-YH30_dvi_tHoeiyoKaEZ86C45JVIm9E/viewform?edit_requested=true"
                target="_blank"
              >
                Encuesta a la familia
              </a>
            </p>
          </ListItem>
          <ListItem button>
            <p>
              <a
                href="//docs.google.com/document/d/1Q4uXxhopYCpQ36cUTQVoT14WZRJAinEne5L6c7xSAvU/"
                target="_blank"
              >
                Planificación de Abril
              </a>
            </p>
          </ListItem>
        </Grid>
      </Box>
    </Box>
  );
}
