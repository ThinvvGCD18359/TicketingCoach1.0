import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    display: 'flex',
    width: 400,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
});

CoachCard.propTypes = {
  coaches: PropTypes.array,
};

CoachCard.defaultProps = {
  coaches: [],
};

export default function CoachCard(props) {
  const classes = useStyles();
  const { coaches } = props;
   

  return (
    <Container>
    <Grid item xs={12}>
      {coaches.map((coach) => (
      <CardActionArea href="/booking">
          
          <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {coach.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {coach.plates}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {coach.phonenumber}
              </Typography>

            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={coach.image} />
          </Hidden>
        </Card>
      </CardActionArea>
      ))}
    </Grid>
    </Container>
  );
}
