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
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
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
      '& > button':{
          justifySelf:"flex-end",
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

function createData(date, time, symptoms, status) {
  return { date, time, symptoms, status };
}

const rows = [
  createData(
    "02/12/2021",
    "09:15-09:45am",
    "Post Knee Surgery Pain",
    "Accepted"
  ),
  createData(
    "04/12/2021",
    "11:00-11:30am",
    "Post Knee Surgery Pain",
    "Scheduled"
  ),
];

export default function ConsultationActivityTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className={classes.headingbar}>
        <Typography variant="subtitle2" className={classes.heading}>
          Consultation Activity
        </Typography>
        <Fab variant="extended" color="secondary" aria-label="add">
          <AddIcon />
          ADD CONSULT
        </Fab>
              </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Consult Time</TableCell>
              <TableCell>Symptoms</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.symptoms}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell component="th" scope="row">
                  <IconButton
                    onClick={console.log("edited")}
                    className={classes.icon}
                  >
                    <EditTwoToneIcon color="disabled" />
                  </IconButton>
                  <IconButton
                    onClick={console.log("edited")}
                    className={classes.icon}
                  >
                    <DeleteTwoToneIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
}
