import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  TextField,
  Button,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const FKTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${colors.blueGrey[50]}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {},
  typed: {
    fontWeight: 'bold',
  },
  listItemAvatar: {
    minWidth: 28,
  },
  formCover: {
    objectFit: 'cover',
    borderBottomLeftRadius: '40%',
  },
  cardProduct: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <CardProduct
            className={classes.cardProduct}
            withShadow
            liftUp
            mediaContent={
              <Image
                src="/assets/images/photos/coworking/place3.jpg"
                srcSet="/assets/images/photos/coworking/place3@2x.jpg 2x"
                alt="Contact cover"
                className={classes.formCover}
                lazy={false}
              />
            }
            cardContent={
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Full Name"
                    label="Full Name *"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Email"
                    label="Email *"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Occupation"
                    label="Occupation"
                    size="medium"
                    name="occupation"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Contact us
                  </Button>
                </Grid>
              </Grid>
            }
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              label="Make File Handling Simple"
              title={
                <>
                  <span>
                    The most useful tool
                    <br />
                    <Typography color="secondary" variant="inherit" component="span">ever created</Typography>
                    <br />
                    <Typography color="secondary" variant="inherit" component="span">for&nbsp;</Typography>
                  </span>
                  <TypedText
                    component="span"
                    variant="h4"
                    color="secondary"
                    className={classes.typed}
                    typedProps={{
                      strings: [
                        'Tax Professional.', 
                        'Lawyers.', 
                        'Teachers', 
                        'Health Professionals.',
                        'Dentists',
                        'Insurance Professionals',
                        'Travel Agents',
                        'Almost anyone'
                      ],
                      typeSpeed: 50,
                      loop: true,
                    }}
                  />
                </>
              }
              subtitle="Using File Neat means: Your customers' file transfer to you is safe and secure. You don't have to change your business practice at all. You get a trust on handling sensitive files from your customers."
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {data.map((item, index) => (
                <Grid item xs={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to render
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
