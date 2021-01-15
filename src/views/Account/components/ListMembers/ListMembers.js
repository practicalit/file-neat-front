import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const ListMembers = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
           Status 
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            First  Name 
          </Typography>
          <TextField
            placeholder="First Name"
            variant="outlined"
            size="medium"
            name="FirstName"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
           Last Name
          </Typography>
          <TextField
            placeholder=" Last Name"
            variant="outlined"
            size="medium"
            name=" LastName"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            placeholder="Your e-mail address"
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>  
        
        </Grid>
        <Grid item xs={12}>
          <Divider />       
              
      </Grid>
    </div>
  );
};

ListMembers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ListMembers;

        