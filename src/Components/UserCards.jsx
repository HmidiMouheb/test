import React, { Component } from "react";
import getUsers from "../actions/getUsers";
import { bindActionCreators } from "redux";
import UserCard from "./UserCard";
import UserPosts from "./UserPosts";
import { connect } from "react-redux";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

class UserCards extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap"
        }}
      >
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          {this.props.users.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.UserReducer.users };
};

const mapActionsToProps = dispatch => {
  return {
    getUsers: bindActionCreators(getUsers, dispatch)
  };
};
export default connect(mapStateToProps, mapActionsToProps)(UserCards);
