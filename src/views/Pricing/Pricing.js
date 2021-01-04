import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';

import Pricings from '../../views/WebBasic/components/Pricings/'; 
import { pricings } from './data';

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

const Pricing = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Section className={classes.section}>
      <div className={classes.formContainer}>

        <Pricings data={pricings} />
      <div className={classes.heroImageContainer}></div>
      </div>
    </Section>
    </div>
  );
};

export default Pricing;