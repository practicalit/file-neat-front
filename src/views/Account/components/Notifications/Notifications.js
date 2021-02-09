import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Notifications = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [email,setEmail]=useState(1);
  const [push,setPush]=useState(1);
  const [text,setText]=useState(1);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleCheckBox=(e,checkbox)=>{
    switch(checkbox){
      case 'email':
        setEmail(e.target.checked?1:0)
        break;
  
        case 'text':
          setText(e.target.checked?1:0)
          break;
  
          case 'push':
            setPush(e.target.checked?1:0)
            break;
            default:
              break;
    }
  }
  const handleSave=(e)=>{
    e.preventDefault();
    let notifications={
      email:email,
      text:text,
      push:push,
      member_id:3
    };
    fetch(process.env.API_URL,{    
      method:"POST",
      body:JSON.stringify(notifications)
    }).then(resp=>console.log(resp))
}

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Notifications
            </Typography>
            <Button variant="outlined" color="primary">
              Reset all
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            System settings
          </Typography>
          <Typography variant="caption" gutterBottom>
            You will recieve emails in your business email address
          </Typography>
          <div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked={true} color="primary" onChange={(e)=>handleCheckBox(e,"email")}/>}
                label="E-mail alerts"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked={true} color="primary" onChange={(e)=>handleCheckBox(e,"push")}/>}
                label="Push notifications"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked={true} color="primary" onChange={(e)=>handleCheckBox(e,"text")} />}
                label="Text messages"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Chat settings
          </Typography>
          <Typography variant="caption" gutterBottom>
            You will recieve emails in your business email address
          </Typography>
          <div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked={false} color="primary" />}
                label="E-mail alerts"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked={true} color="primary" />}
                label="Push notifications"
              />
            </div>
          </div>
        </Grid>
        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large" 
            onClick={(e)=>handleSave(e)}
          >
            save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Notifications.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Notifications;
