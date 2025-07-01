import React, { useEffect } from "react";
import axios from "axios";

// store this data from api
// map the users and list users in the UI

function Users() {
  const getUsers = async () => {
    //dengan keyword await
    //const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // akan impact setiap kali browser di refresh
  // karena axios asyncronous, maka fungsi pemanggilnya harus async
  useEffect(() => {
    getUsers();
  }, []);

  return <div>Users</div>;
}

export default Users;
