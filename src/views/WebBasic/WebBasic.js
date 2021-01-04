import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Contact,
  Faq,
  Hero,
  Partners,
  Pricings,
  Services,
} from './components';

import {
  services,
  partners,
  props,
  pricings,
  faq,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const WebBasic = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Services data={services} />
      </Section>
      <Divider />
      <Section>
        <Partners data={partners} />
      </Section>
      <Divider />
      <SectionAlternate>
        <Contact data={props} />
      </SectionAlternate>
      <div className={classes.shape}>
        <Section>
          <Pricings data={pricings} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Faq data={faq} />
        </Section>
      </div>
    </div>
  );
};

export default WebBasic;
