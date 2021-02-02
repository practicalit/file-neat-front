import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography, 
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import { Handler } from 'leaflet';
import { getFileInfo } from 'prettier';
const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const General = props => {
  const [search, setSearch] =React.useState("");
  const [customers, setCustomers] =React.useState([])
  const handlesubmit =async (e)=>{
   e.preventDefault();
  
 
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_SEARCH_FILE}&comp_id=${search}`)
    .then((response)=>{
      const search =response.data.data
      console.log(search)
      setSearch(search)
      setCustomers(search)
    })
    .catch((err)=> console.log(err.message))
   
  }
 
  
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

        <Table className={classes.table}>
         <TableHead>
          <TableRow>
          <TableCell  align="right">customer_id</TableCell>
          <TableCell align="right">path</TableCell>
            <TableCell align="right">type</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
           {customers.map(customer => (
            <TableRow key={customer.id}>
              <TableCell align="right">{customer.customer_id}</TableCell>
              <TableCell align="right">{customer.path}</TableCell>
              <TableCell align="right">{customer.type}</TableCell>
             
            </TableRow>
           ))} 
        </TableBody>
      </Table> 
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
