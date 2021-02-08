import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { SectionHeader } from 'components/molecules'

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      width: '100%',
    },
    sectionAlternate: {
      background: 'transparent',
      backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
    },
  }));
  
  const Upload = (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
  
        <Grid container spacing={2}>
        <SectionHeader
        title="Upload your documents"
        titleProps={{
          variant: 'h4',
        }}
        />



           <Grid item xs={12} >
        <TextField
              // placeholder=""
              // label="Code *"
              variant="outlined"
              size="small"
              name="code"
              type="file"
              fullWidth

              />
              </Grid>

          <Grid  item xs={12}>
          <TextField
              // placeholder=""
              // label="Code *"
              variant="outlined"
              size="small"
              name="code"
              type="file"
              fullWidth
              />
            </Grid>

            <Grid  item xs={12}>
          <TextField
              // placeholder=""
              // label="Code *"
              variant="outlined"
              size="small"
              name="code"
              type="file"
              fullWidth
              />
              </Grid>

              <Grid item xs={12} >
            <TextField
              // placeholder=""
              // label="Code *"
              variant="outlined"
              size="small"
              name="code"
              type="file"
              fullWidth
              />
              </Grid>

          <Grid item xs={6} >
          <Button
             size="small"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
               >
                Upload
                </Button>
                </Grid>
                </Grid>

        <div className={classes.heroImageContainer}></div>
        </div>
      </Section>
      </div>
    );
  };
  
  export default Upload;