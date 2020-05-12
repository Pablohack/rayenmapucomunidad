import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../style/noticeCard.css';

interface INotice{
  imagen: string;
  extract: string;
  link: string;
}

export default function NoticeCard(props:INotice) {
   let img = "../../utilities/img/"+props.imagen;
    return (
        <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            image={img}
            title="Contemplative Reptile"
          />
          {/* <img src={"../../utilities/img/"+props.imagen}></img> */}
          <CardContent>           
            <Typography variant="body2" color="textSecondary" component="p">
             {props.extract}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={props.link}  > Ir a la noticia</Link>
          </Button>
        </CardActions>
      </Card>
    );
}
