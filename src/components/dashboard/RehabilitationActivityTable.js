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
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  heading: {
    padding: "20px",
    fontSize: "20px",
    fontWeight: "600",
  },
  avatar: {
    marginRight: theme.spacing(1),
    borderRadius:"90%",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  icon: {
    padding: "0 5px",
  },
}));

function createData(name, email, date, time, symptoms) {
  return { name, email, date, time, symptoms };
}

const rows = [
  createData(
    "Leslie Alexander",
    "lesie.alexander@example.com",
    "02/12/2021",
    "09:15-09:45am",
    "Geriatric Physical Therapy"
  ),
  createData(
    "Ronald Richards",
    "ronald.richards@example.com",
    "02/12/2021",
    "12:00-12:30am",
    "Cardiovascular Physical Therapy"
  ),
  createData(
    "Jane Cooper",
    "jane.cooper@example.com",
    "02/13/2021",
    "09:30-11:00am",
    "Vestibular Rehabilitation"
  ),

  createData(
    "Robert Fox",
    "robert.fox@gmail.com",
    "02/14/2021",
    "10:00-10:30am",
    "Orthopedic Physical Therapy"
  ),
];

export default function RehabilitationActivityTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Typography variant="subtitle2" className={classes.heading}>
        Rehabilitation Activity
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient's Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Activity Time</TableCell>
            <TableCell align="right">Rehabilitation Program</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={row.name}>
              <TableCell>
                <img
                  alt="Travis Howard"
                  src={`${i+5}.jpg`}
                  className={classes.avatar}
                />

                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right" style={{ wordWrap: "break-word" }}>
                {row.symptoms}
              </TableCell>
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
