import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import Users from "./components/Users";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/actions";

function App() {
  //access the user state redux
  const user = useSelector((state) => state.user);
  //console.log(user);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // setiap kali user refresh page, maka user information akan direfresh ulang
  //   dispatch(getUser());
  // }, [dispatch]);

  const storeUserData = () => {
    dispatch(
      updateUser({
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        address: "123 Main St",
      })
    );
  };

  return (
    <div>
      <Users />
      {user.name}
      <button onClick={() => storeUserData()}>Login</button>
    </div>
  );
}

export default App;
