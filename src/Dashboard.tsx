import { Link } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
import { useState } from "react";
import {useAuthUser} from 'react-auth-kit'

const Dashboard = () => {
  const signOut = useSignOut();
  const token = useAuthUser()
  console.log(token()?.token,"authHeader");
  
  const [userdata, setUser] = useState({});

  const fetchUser = async () => {
   try {
    const { data } = await axios
    .get("http://localhost:5000/api/v1/payment", {
      headers: {
        Authorization: "Bearer "+token()?.token.toString(),
      },
    })
  setUser(data);
   } catch (error) {
    console.log(error);
   }
  };
  return (
    <div className="m-4 gap-4 flex flex-col">
      <Link to="/">HOme</Link>
      <h1>Dashboard</h1>
        <div>
          <h2> email : {userdata?.email} </h2>
          <h2> fullName : {userdata?.fullName} </h2>

        </div>
      <button onClick={fetchUser}>Fetch User</button>
      <h2>This is a protected route</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
