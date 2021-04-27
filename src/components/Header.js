import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import Badge from "@material-ui/core/Badge";

import NotificationsIcon from "@material-ui/icons/Notifications";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  search: {
    borderRadius: "30px",
    background: "white",
    width: "300px",
    height: "35px",
    marginRight: "auto",
  },
  input: {},
  iconButton: {
    padding: 5,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  bell: {
    margin: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <IconButton aria-label="cart" className={classes.bell}>
        <StyledBadge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </StyledBadge>
      </IconButton>
      <Avatar alt="Travis Howard" src="10.jpg" className={classes.avatar} />
    </div>
  );
}
