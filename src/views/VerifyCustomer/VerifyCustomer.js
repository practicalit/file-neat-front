import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button, TextField } from '@material-ui/core';


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

const VerifyCustomer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
        <TextField
              placeholder="Code"
              label="Code *"
              variant="outlined"
              size="small"
              name="code"
              type="text"
            />
          <Button
            size="small"
            variant="contained"
            type="submit"
            color="primary"
          
          >
            Verify
            </Button>

          <div className={classes.heroImageContainer}></div>
        </div>
      </Section>
    </div>
  );
};

export default VerifyCustomer;