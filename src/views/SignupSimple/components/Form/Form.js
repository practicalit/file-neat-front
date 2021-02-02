import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: true, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  CompanyName: {
    presence: { allowEmpty: true, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  
  password: {
    presence: { allowEmpty: true, message: 'is required' },
    length: {
      maximum: 8,
    },
  },
  Address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  phoneNumber: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 10,
    },
  },
  Website: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
};

const Form = () => {
  const router = useRouter();
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [signupMessage, setSignupMessage] = React.useState();
  const [messageColor, setMessageColor] = React.useState("textPrimary");


  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      axios.post(`${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_SIGNUP}`, {
        email: formState.values.email,
        password: formState.values.password,
        companyName: formState.values.companyName,
        Address: formState.values.Address,
        phoneNumber:formState.values.Address,
        Website: formState.values.Website

      })
    .then( response => {
      if (response && response.data && response.data.success) {
        setSignupMessage("Successfully signup");
        setMessageColor("primary");
        //then the user has to be redirected to the home page.
      } else {
        console.log(response.data.messages);
        setSignupMessage(response.data.messages);
        setMessageColor("error");
      }
    }, error => {
      console.error(error);
    })
  }
    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="signup-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Company Name *"
              label="Company Name*"
              variant="outlined"
              size="medium"
              name="CompanyName"
              fullWidth
              helperText={hasError('CompanyName') ? formState.errors.CompanyName[0] : null}
              error={hasError('CompanyName')}
              onChange={handleChange}
              type="text"
              value={formState.values.CompanyName || ''} 
              />
              </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null}
              
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Address"
              label="Address *"
              variant="outlined"
              size="medium"
              name="Address"
              fullWidth
              helperText={
                hasError('Address') ? formState.errors.Address[0] : null
              }
              error={hasError('Address')}
              onChange={handleChange}
              type="Address"
              value={formState.values.Address || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Phone Number"
              label="phone Number *"
              variant="outlined"
              size="medium"
              name="phoneNumber"
              fullWidth
              helperText={
                hasError('phoneNumber') ? formState.errors.phoneNumber[0] : null
              }
              error={hasError('phoneNumber')}
              onChange={handleChange}
              type="Number"
              value={formState.values.phoneNumber || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Website"
              label="Website *"
              variant="outlined"
              size="medium"
              name="Website"
              fullWidth
              helperText={
                hasError('Website') ? formState.errors.Website[0] : null
              }
              error={hasError('Website')}
              onChange={handleChange}
              type="Website"
              value={formState.values.Website || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color={messageColor}
              align="center"
            >
              {signupMessage}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Already have an account?{' '}
              <LearnMoreLink 
              title="Signup"
               href="/sign-up" />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;