import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import EjectIcon from '@material-ui/icons/Eject';
import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  headingbar:{
      display:"flex",
      '& > h6' :{
            marginRight:"auto"
      },
        padding:"15px"
  },
  heading: {
    
    fontSize: "20px",
    fontWeight: "600",
  },
  icon: {
    padding: "0 5px",
  },
}));

function createData(date, time, attemptedReps, noSucccessfulReps, pSuccessfulReps, status) {
  return { date, time, attemptedReps, noSucccessfulReps, pSuccessfulReps, status  };
}

const rows = [
  createData(
    "02/7/2021",
    "09:15-09:45am",
    "26",
    "18",
    "69.2",
    "Completed"
  ),
  createData(
    "04/8/2021",
    "09:15-09:45am",
    "24",
    "19",
    "80.6",
    "Completed"
  ),
  createData(
    "04/9/2021",
    "09:15-09:45am",
    "-",
    "-",
    "-",
    "Missed"
  ),
  createData(
    "04/10/2021",
    "09:15-09:45am",
    "31",
    "25",
    "79.1",
    "Completed"
  )
];

export default function RehabilitationRecords() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className={classes.headingbar}>
        <Typography variant="subtitle2" className={classes.heading}>
         Rehabilitation Records
        </Typography>
              </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Activity Time</TableCell>
              <TableCell>Attempted Reps</TableCell>
              <TableCell># Successful Reps</TableCell>
              <TableCell>% Successful Reps</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.attemptedReps}</TableCell>
                <TableCell>{row.noSucccessfulReps}</TableCell>
                <TableCell>{row.pSuccessfulReps}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell component="th" scope="row">
                  <IconButton
                    onClick={console.log("edited")}
                    className={classes.icon}
                  >
                    <InfoIcon color="secondary" />
                  </IconButton>
                  <IconButton
                    onClick={console.log("edited")}
                    className={classes.icon}
                  >
                    <EjectIcon color="secondary" style={{transform:"rotate(90deg)"}}/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
}
