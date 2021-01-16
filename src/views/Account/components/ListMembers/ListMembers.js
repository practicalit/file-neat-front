import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FilterVintageTwoTone } from '@material-ui/icons';
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
let id = 0;
function createData(first_name, last_name, email, status) {
  id += 1;
  return { id, first_name, last_name, email, status };
}
const rows = [
  createData('James', 'Peter ', 'peter@fileneat.com','ACTIVE'),
  createData('John', 'Johnson', 'john@fileneat.com', 'ACTIVE'),
  createData('Jenn', 'James','jenn@fileneat.com', 'INACTIVE'),
];
function SimpleTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
          <TableCell align="right">first_name</TableCell>
            <TableCell align="right">last_name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleTable);














