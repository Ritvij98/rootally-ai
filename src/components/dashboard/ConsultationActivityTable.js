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
import { Redirect, useHistory } from "react-router";
const useStyles = makeStyles((theme)=>({
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
    "Nicci Troiani",
    "nicci.troiani@example.com",
    "02/12/2021",
    "09:15-09:45am",
    "Post Knee Surgery Pain"
  ),
  createData(
    "George Fields",
    "george.fields@example.com",
    "02/12/2021",
    "11:00-11:30am",
    "Hamstring Strain"
  ),
  createData(
    "Jones Dermot",
    "jones.dermot@example.com",
    "02/13/2021",
    "09:30-10:00am",
    "Back strain"
  ),

  createData(
    "Jane Doe",
    "jane.doe@gmail.com",
    "02/14/2021",
    "10:00-10:30am",
    "Runner’s knee"
  ),
];

export default function ConsultationActivityTable() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/patients")
  }
  return (
    <TableContainer component={Paper}>
      <Typography variant="subtitle2" className={classes.heading}>
        Consultation Activity
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient's Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Consult Time</TableCell>
            <TableCell align="right">Symptoms</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={row.name} onClick={handleClick} style={{cursor:"pointer"}}>
              <TableCell>
              <img
                  alt="Travis Howard"
                  src={`${i+1}.jpg`}
                  className={classes.avatar}
                />

                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.symptoms}</TableCell>
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
