import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
function createData(file_name, uploaded_by, uploaded_date, status) {
  id += 1;
  return { id, file_name, uploaded_by, uploaded_date, status };
}

const rows = [
  createData('one.pdf', 'Peter James', '2020-12-23','Downloaded'),
  createData('two.pdf', 'PeterJames', '2020-12-23', 'Downloaded'),
  createData('three.pdf', 'Jennifer James', '2020-12-21', 'uploaded'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
          <TableCell align="right">file_name</TableCell>
            <TableCell align="right">uploaded_by</TableCell>
            <TableCell align="right">uploaded_date</TableCell>
            <TableCell align="right">status</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.file_name}</TableCell>
              <TableCell align="right">{row.uploaded_by}</TableCell>
              <TableCell align="right">{row.uploaded_date}</TableCell>
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