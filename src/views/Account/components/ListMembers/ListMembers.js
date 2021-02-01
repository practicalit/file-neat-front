import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CardMembership, FilterVintageTwoTone } from '@material-ui/icons';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
// let id = 0;
// function createData(first_name, last_name, email, status) {
//   id += 1;
//   return { id, first_name, last_name, email, status };
// }
// const rows = [
//   createData('James', 'Peter ', 'peter@fileneat.com','ACTIVE'),
//   createData('John', 'Johnson', 'john@fileneat.com', 'ACTIVE'),
//   createData('Jenn', 'James','jenn@fileneat.com', 'INACTIVE'),
// ];
function SimpleTable(props) {
  const { classes } = props;
  const [members, setMembers] = useState([]);
console.log(members);
  useEffect(()=>{
    
    getMembers();
    
     return ()=> {

     };
  },[]);
  
  const getMembers = () => {
    axios
      .get(
              `${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_SEARCH_MEMBER}`
            //  `http://file.solutionladder.com/ajax.php?action=search-member&comp_id=2`
      )
      .then((response) =>{
       const members = response.data.data
        console.log(members)
        setMembers([members])
      })
      .catch((err) => console.error(err.message))
    }
 
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            
          <TableCell align="right">company_id</TableCell>
          <TableCell align="right">first_name</TableCell>
            <TableCell align="right">last_name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">city</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {members.map((member) => 
           
            (
             <TableRow  key={member.id}>
              {/* <TableCell component="th" scope="row">
                
              </TableCell> */}
              <TableCell align="right">{member.company_id}</TableCell>
              <TableCell align="right">{member.first_name}</TableCell>
              <TableCell align="right">{member.last_name}</TableCell>
              <TableCell align="right">{member.email}</TableCell>
              <TableCell align="right">{member.city}</TableCell>
            </TableRow>
           ) )}
           </TableBody>
      </Table>
    </Paper>
  
    
            

  
  )};
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleTable);














