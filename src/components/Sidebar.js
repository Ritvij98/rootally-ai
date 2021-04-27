import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpIcon from '@material-ui/icons/Help';
import { Avatar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    padding: "20px 5px",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& > MuiTypography-root": {
      marginTop: "10px",
    },
  },
  


  listitem: {
    padding: "0",
    "& > a": {
      display: "flex",
      textDecoration: "none",
      color: "black",
    },

    "& > .active": {
      color: "#d93067",
      transform: "scale(1.1)",
      //textShadow: "2px 2px 5px #696969"
    },
    "& > *:hover": {
      color: "#d93067",
      transform: "scale(1.1)",
      
    },
    "& > a >.MuiListItemIcon-root": {
      minWidth: "30px",
    },
    "& > a >.MuiListItemIcon-root > svg": {
      marginTop: "4px",
    },
    "& > .MuiListItemText-root": {
      marginBottom: "0px",
    },
    "& > a> .MuiListItemText-root > .MuiTypography-root": {
      fontWeight: 400,
    },
    "& > *": {
      margin: theme.spacing(1),
      transition: "transform 0.5s"
    },
  },
  link: {},
  icon1: {
    width: "20px",
    height: "30px",
    objectFit: "scale-down",
  },
  icon2: {
  
    width: "20px",
    height: "30px",
    objectFit: "scale-down",
  },
  icon3: {
  
    width: "15px",
    height: "30px",
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
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Avatar src="logo.png" />
        <Typography variant="h6" color="secondary">
          Rootally Ai
        </Typography>
      </div>
      <br />
      <Typography variant="subtitle" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
        Dr. Jacob Jones
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={classes.listitem}>
          <NavLink to="/dashboard" className={classes.link}>
            <ListItemIcon>
              <DashboardIcon  style={{color:"#d93067"}}/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listitem}>
          <NavLink to="/c" className={classes.link}>
            <ListItemIcon>
              <img src="consultations.png" className={classes.icon1} />
            </ListItemIcon>
            <ListItemText primary="Consultations" />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listitem}>
          <NavLink to="/r" className={classes.link}>
            <ListItemIcon>
            <img src="rehabilitation.png" className={classes.icon2} />
            </ListItemIcon>
            <ListItemText primary="Rehabilitations" />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listitem}>
          <NavLink to="/patients" className={classes.link}>
            <ListItemIcon>
            <img src="Patient.png" className={classes.icon3} />
            </ListItemIcon>
            <ListItemText primary="Patients" />
          </NavLink>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem className={classes.listitem}>
          <NavLink to="/h" className={classes.link}>
            <ListItemIcon>
              <HelpIcon style={{color:"#d93067"}}/>
            </ListItemIcon>
            <ListItemText primary="Help" />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
}
