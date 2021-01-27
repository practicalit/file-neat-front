import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    inputTitle: {
      fontWeight: 700,
      marginBottom: theme.spacing(1),
    },
  }));
  
  
  
  const options = ["Name", "E-mail"];
  
  const General= props => {
    const { className, ...rest } = props;
    const classes = useStyles();

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
   /*const handleClick=(e)=>{
       e.target.options
   }*/
  
    return (
      <div className={clsx(classes.root, className)} {...rest}>
        <Grid container spacing={isMd ? 4 : 2}>
        <div>{`${value !== null ? `${value}` : ''}`}</div>
        <div>{` ${inputValue}`}</div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states"
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
        />
        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
           // onClick={handleClick}
          >
           Search
          </Button>
        </Grid>
        </Grid>
      </div>
      
    );
  }
  General.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
  };
  export default General;