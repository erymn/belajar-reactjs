import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import Users from "./components/Users";
import { useSelector } from "react-redux";

function App() {
  //access the user state redux
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
