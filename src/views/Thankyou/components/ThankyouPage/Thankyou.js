import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
 
import { SectionHeader } from 'components/molecules';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  hero: {
    background: theme.palette.alternate.dark,
  },
  heroWrapper: {
    position: 'relative',
  },
  heroImageContainer: {
    left: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    backgroundSize: 'contain',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  heroGrid: {
    maxWidth: 926,
  },
  searchGrid: {
    zIndex: 3,
  },
  searchGridText: {
    maxWidth: 605,
  },
  textField: {
    width: '100%',
  },
  searchButton: {
    width: '100%',
    height: '100%',
  },
  searchIcon: {
    color: colors.grey[600],
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Thankyou = props => {
  const [state, setState] = useState({
    company: {name: ""}, 
    customer: {name:""}, 
  });

  const history = useHistory();

  useEffect(() => {
    if (
      history &&
      history.location &&
      history.location.state &&
      history.location.state.customer
    ) {
      setState({ 
        ...state, 
        company: history.location.state.company, 
        customer: history.location.state.customer 
      });
    } else {
      history.push('/identify-member');
    }
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title={`Thank you, ${state.customer.first_name}`}
            subtitle={`Your files are sent to ${state.company.name}`}
            titleProps={{
              variant: 'h3',
            }}
          />
          {/* FileSend holds the file upload and sending part */}
         <div className={classes.heroImageContainer}></div>
        </div>
      </Section>
    </div>
  );
};

export default Thankyou;
