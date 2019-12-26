import axios from "axios";
const chalk = require("chalk");

const getUsers = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        dispatch({ type: "GET_USERS", payload: result.data });
      })
      .catch(err => (err ? console.log(chalk.red("asba", err)) : null));
  };
};

export default getUsers;
