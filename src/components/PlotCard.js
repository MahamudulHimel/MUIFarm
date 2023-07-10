import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function PlotCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 50 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='http://localhost:3000/plotinformation/aaa'>View More</Button>
        <Button href='http://localhost:3000/edit/plotinformation/aaa'>Edit</Button>
      </CardActions>
    </Card>
  );
}
