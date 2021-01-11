import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { colors, List, ListItem, ListItemText } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  list: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${colors.grey[200]}`,
    '&:last-child': {
      borderBottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      borderRight: `1px solid ${colors.grey[200]}`,
      borderBottom: 0,
      '&:last-child': {
        borderRight: 0,
      },
    },
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Can't find the answer you need?"
        subtitle="Any doubts about the product or how to use it? No worries, we are here to help."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <List disablePadding className={classes.list}>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="+1 833 966 1234"
            primaryTypographyProps={{
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="hello@fileneat.com"
            primaryTypographyProps={{
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          data-aos="fade-up"
          className={classes.listItem}
        >
          <ListItemText
            className={classes.listItemText}
            primary="Head Office"
            secondary="911 Silver Spring Ave Silver Spring MD 20910"
            primaryTypographyProps={{
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              color: 'textPrimary',
              component: 'span',
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
