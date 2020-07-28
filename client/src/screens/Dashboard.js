import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import routes from "../constants/routes";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(4),
  },
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <Typography variant="h1">Todo!</Typography>
          <Typography variant="h5">List down your daily tasks</Typography>
          <Typography variant="h6">Dasboard</Typography>
        </div>
        <Link to={routes.DASHBOARD}>
          <Fab color="secondary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
