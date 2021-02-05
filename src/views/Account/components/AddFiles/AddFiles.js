import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Form } from './components';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const AddFiles = () => {
  const classes = useStyles();
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
 //const REACT_APP_BACKEND_SERVER="http://file.solutionladder.com/ajax.php?action="
//const REACT_APP_Addfile="add-file"
  const handleSubmit = event => {
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_ADDFILE}`, {
      
        customer_id: formState.values.customerID,
        path: formState.values.path,
        type: formState.values.type
      
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
          ...formState, errors: "Failed to upload"})
      )
        
      }
    }, error => {
      setFormState(formState => ({
          ...formState, errors: "Failed to upload File"})
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
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Add File"
            
            titleProps={{
              variant: 'h3',
            }}
          />
          <div className={classes.root}>
            <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="customerID"
                    label="customerID*"
                    variant="outlined"
                    size="medium"
                    name="customerID"
                    fullWidth


                    onChange={handleChange}
                    type="text"
                    value={formState.values.customerID|| ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="path"
                    label="path *"
                    variant="outlined"
                    size="medium"
                    name="path"
                    fullWidth
                    onChange={handleChange}
                    type="text"
                    value={formState.values.path || ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="type"
                    label="type*"
                    variant="outlined"
                    size="medium"
                    name="type"
                    fullWidth
                    onChange={handleChange}
                    type="text"
                    value={formState.values.type || ''}
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
                   
                    align="center"
                  >

                    {"Upload Your File"}
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
                    Upload

            </Button>
            {<Typography
                    variant="subtitle1"
                   
                    align="center"
                  >

                    {formState.errors === "Failed to upload" ? formState.errors : ""}
                  </Typography>}
                  {<Typography
                    variant="subtitle1"
                   
                    align="center"
                  >

                    {formState.errors=== null? "File uploaded successfully" : ""}
                  </Typography>}
                </Grid>
                
              </Grid>
            </form>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default AddFiles;