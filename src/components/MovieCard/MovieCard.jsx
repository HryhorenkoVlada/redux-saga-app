import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  return (
    <Card
      sx={{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={movie.Poster}
        alt="poster"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{ pb: 0 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              height: 64,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: '#606060',
              //whiteSpace: 'nowrap',
            }}
          >
            {movie.Title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', px: 2, pb: 2 }}
        >
          <Link to={`/movies/${movie.imdbID}`} className="btn btn_primary">
            Learn More
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

export default MovieCard;
