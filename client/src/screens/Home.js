import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Typography variant="h1">Todo!</Typography>
        <Typography variant="h5">List down your daily tasks</Typography>
      </div>
    );
  }
}

export default Home;
