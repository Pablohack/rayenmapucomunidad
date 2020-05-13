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
import a from '../../utilities/img/not1.jpg'
interface INotice{
  imagen: string;
  extract: string;
  link: string;
}

export default function NoticeCard(props:INotice) {
   let img = "/img/" + props.imagen;
  console.log(img);
    return (
        <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            title="Contemplative"
            image={img}
         />
          {/* <img src={"/img/"+props.imagen}></img> */}
          <CardContent>           
            <Typography variant="body2" color="textSecondary" component="p">
             {props.extract}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={props.link} target="_blank" > Ir a la noticia</Link>
          </Button>
        </CardActions>
      </Card>
    );
}
