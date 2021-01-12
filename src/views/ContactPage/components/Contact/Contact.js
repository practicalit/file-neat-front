import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, Map } from 'components/organisms';

const useStyles = makeStyles(() => ({
  root: {},
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title="Contact details"
              subtitle="Whichever methods works for you to communicate.."
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/contact-icon-phone.png"
                    srcSet="/assets/images/illustrations/contact-icon-phone@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary="Phone"
                  secondary="+1 833 966 1234"
                  primaryTypographyProps={{
                    className: classes.title,
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/contact-icon-mail.png"
                    srcSet="/assets/images/illustrations/contact-icon-mail@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary="Email"
                  secondary="hello@fileneat.com"
                  primaryTypographyProps={{
                    className: classes.title,
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/contact-icon-pin.png"
                    srcSet="/assets/images/illustrations/contact-icon-pin@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary="Head Office"
                  secondary="911 Silver Spring Ave Silver Spring MD 20910"
                  primaryTypographyProps={{
                    className: classes.title,
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={
          <Map
            center={[38.992081, -77.024345]}
            pins={data}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
