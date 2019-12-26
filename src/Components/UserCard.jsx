import React from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

export default function UserCard(props) {
  const { username, email, phone, id } = props.user;
  console.log(props);
  return (
      <div>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/posts/${id}`}>
          <button>posts</button>
        </Link>
      </div>
  );
}
