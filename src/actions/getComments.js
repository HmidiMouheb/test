import axios from "axios";
const chalk = require("chalk");

const getComments = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(result => {
        dispatch({ type: "GET_POSTS_COMMENTS", payload: result.data });
      })
      .catch(err => (err ? console.log(chalk.red("ERROR", err)) : null));
  };
};

export default getComments;
