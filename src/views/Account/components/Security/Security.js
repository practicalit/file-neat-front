import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Divider,
} from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Security = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleSubmit = event => {
    event.preventDefault()

      axios.post(`${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_CHANGEPASSWORD}`, {
          email: formState.values.email,
          currentPassword: formState.values.currentPassword,
          newPassword: formState.values.newPassword,
          repatPassword: formState.values.repeatPassword,
          
    })
    .then( response => {
      if (response && response.data && response.data.success) {
        setFormState(formState => ({
          ...formState, errors: null})
        ) 
      
        //then the user has to be redirected to the home page.
      } else {
        console.log(response.data.messages);
        setFormState(formState => ({
          ...formState, errors: "Successfully changed"})
        )
      }
    }, error => {
      setFormState(formState => ({
        ...formState, errors: "Failed to change"})
      )
  })

}
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
  const hasError = field =>
  formState.touched[field] && formState.errors[field] ? true : false;

  return (
      <div className={clsx(classes.root, className)} {...rest}>
     <form name="password-reset-form" method="post" onSubmit={handleSubmit}></form>  
     <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Change Password
            </Typography>
            <Button variant="outlined" color="primary">
              Log out
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="text"
              value={formState.values.email || ''}
            />
        </Grid> 
        Current password
          </Typography>
          <TextField
            placeholder="Current Password"
            label="Current password *"
            variant="outlined"
            size="medium"
            name="currentPassword"
            fullWidth
             helperText={hasError('currentPassword') ? formState.errors.currentPassword[0] : null}
              error={hasError('currentpassword')}
              onChange={handleChange}
              type="password"
              value={formState.values.currentPassword || ''}        
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
          New password
          </Typography>
          <TextField
           placeholder="New Password"
           label="New password *"
           variant="outlined"
           size="medium"
           name="newPassword"

           fullWidth
           helperText={hasError('newPassword') ? formState.errors.newPassword[0] : null}
              error={hasError('newPassword')}
              onChange={handleChange}
              type="password"
              value={formState.values.newPassword || ''}       
          />
           </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Repeat password
          </Typography>
          <TextField
            placeholder="Repeat password"
            label="Repeat password *"
            variant="outlined"
            size="medium"
            name="repeatPassword"
            fullWidth
              helperText={hasError('repeatPassword') ? formState.errors.repeatPassword[0] : null}
              error={hasError('repeatPassword')}
              onChange={handleChange}
              type="password"
              value={formState.values.repeatPassword || ''} 
          />
        </Grid>
       
          <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch color="primary" defaultChecked />}
            label={
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.switchTitle}
              >
                Public Profile
              </Typography>
            }
            labelPlacement="end"
            />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch color="primary" />}
                label={
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.switchTitle}
              >
                Expose your email
              </Typography>
            }
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"

                    align="center"
                  >                 
                  
                  </Typography>
                </Grid>

        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
            onClick={(e)=>handleSubmit(e)}       
          >
          save

          </Button>
          {<Typography
                    variant="subtitle2"

                    align="center"
          >
                    {formState.errors === "Successfully changed" ? formState.errors : ""}
                  </Typography>}
                  {<Typography
                    variant="subtitle1"
                    align="center"
          >
                    {formState.errors=== null? "Faild to change" : ""}

                  </Typography>}

         </Grid>
        </Grid>
        </div>
  );
};        
 
Security.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};
   

export default Security;
