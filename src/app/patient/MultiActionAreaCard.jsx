import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';

export default function MultiActionAreaCard() {
  return (
    // 
    <Card sx={{  maxWidth: 345,
      borderRadius: 4, // Rounded corners
      backgroundColor: '#f5f5f5', // Light gray background
      boxShadow: 5, // Adds elevation
      border: '1px solid #ddd'  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/lizard.jpg" 
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': { backgroundColor: '#1565c0' },
          }} >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
