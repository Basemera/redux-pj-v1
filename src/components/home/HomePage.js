import React from "react";
import { Link } from "react-router";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1> PluralSight Administration</h1>
        <p>React, Redux and react-router</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}
export default HomePage;
