import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  tablewrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
}));

function createData(name, asset, size) {
  return {
    name,
    asset,
    size,
    assets: [
      { filename: 'Company Profile', type: 'PDF', link: "Download" },
      { filename: 'Product Brochure', type: 'PDF', link: "Download" },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.asset}</TableCell>
        <TableCell align="right">{row.size}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Collection
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>File Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell align="right">Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.assets.map((assetsRow) => (
                    <TableRow key={assetsRow.date}>
                      <TableCell component="th" scope="row">
                        {assetsRow.filename}
                      </TableCell>
                      <TableCell>{assetsRow.type}</TableCell>
                      <TableCell align="right">{assetsRow.link}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    asset: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    assets: PropTypes.arrayOf(
      PropTypes.shape({
        filename: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Company A', 15, 6.09),
  createData('Company B', 23, 9.09),
  createData('Company C', 26, 16.09),
  createData('Company D', 30, 3.7),
  createData('Company E', 35, 16.0),
];

export default function CollapsibleTable() {
  const classes = useStyles();

  return (
    <div className={classes.tablewrapper}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Assets</TableCell>
              <TableCell align="right">Size (mb)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}