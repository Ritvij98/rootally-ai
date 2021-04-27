import React from "react";
import ConsultationActivityTable from "../components/dashboard/ConsultationActivityTable";
import PatientsGraph from "../components/dashboard/PatientsGraph";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RehabilitationActivityTable from "../components/dashboard/RehabilitationActivityTable";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(0.5),
    textAlign: "center",
    boxShadow: "0 8px 16px 0 #BDC9D7",
    borderRadius: "10px",
    marginRight: "10px",
    background: "white",
  },
  tableCard: {
    boxShadow: "0 8px 16px 0 #BDC9D7",
    borderRadius: "10px",
    width: "99%",
  },
  icon1: {
    marginLeft: "10px",
    width: "40px",
    height: "70px",
    objectFit: "scale-down",
  },
  icon2: {
    marginLeft: "10px",
    width: "30px",
    height: "60px",
    objectFit: "scale-down",
  },
  icon3: {
    marginLeft: "10px",
    width: "30px",
    height: "50px",
    objectFit: "scale-down",
    // "& .MuiSvgIcon-root": {
    //     //color: theme.palette.text.secondary,
    //   fontSize: "50px",
    // },d93067ff
  },
  icon4: {
    marginLeft: "10px",
    width: "40px",
    height: "70px",
    objectFit: "scale-down",
  },
  text: {
    padding: theme.spacing(2),
  },
}));
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item spacing={2}>
                <img src="consultations.png" className={classes.icon1} />
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.text}
              >
                <Typography variant="subtitle2" gutterBottom>
                  <strong>Consultations</strong>
                </Typography>
                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  32
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className="col-3">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item spacing={2}>
                <img src="rehabilitation.png" className={classes.icon2} />
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.text}
              >
                <Typography variant="subtitle2" gutterBottom>
                  <strong>Rehabilitations</strong>
                </Typography>
                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  24
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className="col-3">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item spacing={2}>
                <img src="Patient.png" className={classes.icon3} />
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.text}
              >
                <Typography variant="subtitle2" gutterBottom>
                  <strong>Active Patients</strong>
                </Typography>
                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  104
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
        <div className="col-3">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item spacing={2}>
                <img src="heart.png" className={classes.icon4} />
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.text}
              >
                <Typography variant="subtitle2" gutterBottom>
                  <strong>Recovered Patients</strong>
                </Typography>
                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  53
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
      <br />
      <Card
        className={classes.tableCard}
        style={{ height: "420px", padding: "20px" }}
      >
        <Typography variant="h6" gutterBottom>
          Patients
        </Typography>
        <PatientsGraph />
      </Card>
      <br />
      <Card className={classes.tableCard}>
        <ConsultationActivityTable />
      </Card>
      <br />
      <Card className={classes.tableCard}>
        <RehabilitationActivityTable />
      </Card>
      <br />
    </div>
  );
}
