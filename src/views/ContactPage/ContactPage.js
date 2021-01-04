import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Contact, Form, Hero, Newsletter } from './components';

import { mapData } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <Contact data={mapData} />
      <SectionAlternate>
        <Form />
      </SectionAlternate>
      <Section>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPage;
