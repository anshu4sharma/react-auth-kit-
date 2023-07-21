import { Link } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'

const Dashboard = () => {
  const signOut = useSignOut()
  return (
    <div className="m-4 gap-4 flex flex-col">
      <Link to="/">HOme</Link>
      <h1>Dashboard</h1>
      <h2>This is a protected route</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
