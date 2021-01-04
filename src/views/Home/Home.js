import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Account, Landings, Pages, Hero } from './components';
import { landings, pages, account } from './data';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Hero />
      </Section>
      <SectionAlternate>
        <Landings data={landings} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Pages data={pages} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Account data={account} />
      </SectionAlternate>
    </div>
  );
};

export default Home;
