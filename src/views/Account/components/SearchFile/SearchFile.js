import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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

const General = props => {
  const [search, setSearch] =React.useState("");
  const handlesubmit =async (e)=>{
   e.preventDefault();
   try {
     const searchres =await fetch(
   `${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_SEARCH_FILE}/?comp_id=${search}`
  // 'http://file.solutionladder.com/ajax.php?action=serch-file&comp_id=CUSTOMER_ID_HERE'
     );
   
     const res =await searchres.json();
     props.callBackMe(res);
   } catch (error){
     console.log(error.message)
   }
   };
  
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
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
          Customer Id
          </Typography>
          </Grid>
           
          <form onSubmit={handlesubmit}>
            <Grid item xs={12}>
          <TextField
            placeholder="Customer Id"
            variant="outlined"
            size="large"
            name="fullname"
            fullWidth
            type="text"
            value={search}
            onChange={(e)=>{setSearch(e.target.value);
              // console.log(e.target.value);
              }}
            
          />
        </Grid>
        
        
        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="small"
          >
           Search
          </Button>
          
        </Grid>
        </form>
        </Grid>
    </div>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default General;
