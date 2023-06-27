import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { borderColor } from '@mui/system';

import '../themes.css'

export default function PokemonCard({name, image, types}) {

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + ' | ' +types[1].type.name
    }return types[0].type.name
  }

  return (
    <Card sx={{ maxWidth: 345,background: `var(--${types[0].type.name})`,border:3,  borderColor: `var(--${types[0].type.name}Border)`}}>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" display='flex' justifyContent='center'>
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" display='flex' justifyContent='center'>
            {typeHandler()}
          </Typography>
        </CardContent>
    </Card>
  );
}