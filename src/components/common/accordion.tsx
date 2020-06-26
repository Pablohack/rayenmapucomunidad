import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IAccordion } from "../../containers/Interfaces/Interfaces";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    backgroundColor: "#F3F3F3",
  },
}));

export default function Accordion(props: IAccordion) {
  const classes = useStyles();
  let parvularia = props.data;
  console.log(props.link);
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Nivel: {props.level}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.body}>
          <Typography>
            <List dense={true}>
              {parvularia.map((value) => (
                <ListItem>
                  <ListItemText primary={value.name} secondary={value.cargo} />
                </ListItem>
              ))}
            </List>
            <NavLink to={props.link} target="_blank">
              Material Didactico
            </NavLink>
            <br></br>
            <NavLink to={props.linkInterview} target="_blank">
              Evaluación de Experiencia
            </NavLink>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
