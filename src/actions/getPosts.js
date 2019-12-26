import axios from "axios";
const chalk = require("chalk");

const getPosts = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(result => {
        dispatch({ type: "GET_USERS_POSTS", payload: result.data });
      })
      .catch(err => (err ? console.log(chalk.red("ERROR", err)) : null));
  };
};

export default getPosts;
