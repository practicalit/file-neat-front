import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {Typography, Grid, Button, TextField} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'


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
  
  const Acknowledge = (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
          <Checkbox  />I Acknowledge
          </Grid>


          <Grid item xs={12}>
            
          <Button 
          size='small'
          variant='contained'
          type='submit'
          fullWidth
          >
              Submit
              </Button>
              </Grid>
              </Grid>
        <div className={classes.heroImageContainer}></div>
        </div>
        
      </Section>
     
      </div>
    );
  };
  
  export default Acknowledge;