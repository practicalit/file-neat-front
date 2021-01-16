import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Typography, TextField, Grid, Button } from '@material-ui/core';

//import Pricings from '../../views/WebBasic/components/Pricings/'; 
//import { pricings } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const IdentifyCompany= (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Section className={classes.section}>
      <div className={classes.formContainer}>

      <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Six Digit ID
            </Typography>
            <TextField
              placeholder="Your Six digit ID"
              variant="outlined"
              size="Medium"
              name="Six Digit ID"
             
              type="Text"
            />
          </Grid>
          <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              submit
            </Button>
          
      
      <div className={classes.heroImageContainer}></div>
      </div>
    </Section>
    </div>
  );
};

export default IdentifyCompany;
