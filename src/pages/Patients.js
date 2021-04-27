import React, { useEffect } from "react";
import ConsultationActivity from "../components/patients/ConsultationActivity";
import RehabilitationRecords from "../components/patients/RehabilitationRecords";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  tableCard: {
    boxShadow: "0 8px 16px 0 #BDC9D7",
    borderRadius: "10px",
    width: "99%",
  },
  card: {
    height: "130px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px 0 #BDC9D7",
    // "& > .MuiButtonBase-root": {
    //   margin: "auto",
    // },
  },
  emptycard: {
    padding: "30px 42%",
    height: "130px",
    borderRadius: "10px",
    "& > button": {
      boxShadow: "none",
    },
  },
  userImage: {
     weight: theme.spacing(16),
     height: theme.spacing(16),
    borderRadius: "90%",
  },
}));
export default function Patients() {
  const classes = useStyles();
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img src="1.jpg" alt="Nicci Troiani" className={classes.userImage} />
        </div>
        <div className="col-6">
          <br/>
          <Typography variant="h5">Nicci Troiani</Typography>
          <Typography variant="h5">nicci.troiani@example.com</Typography>
        </div>
      </div>
      <br />
      <Card className={classes.tableCard}>
        <ConsultationActivity />
      </Card>
      <br />
      <div className="row">
        <div className="col-4">
          <Card className={classes.card} style={{ background: "#d93067" }}>
            <Typography
              variant="subtitle1"
              style={{
                color: "white",
                fontSize: "25px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Post Knee Surgery Rehabilitation
            </Typography>
          </Card>
        </div>
        <div className="col-4">
          <Card className={classes.emptycard}>
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Card>
        </div>
        <div className="col-4">
          <Card className={classes.emptycard}>
            <Fab color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Card>
        </div>
      </div>
      <br />
      <Card className={classes.tableCard}>
        <RehabilitationRecords />
      </Card>
      <br />
    </div>
  );
}
