import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="gap-4 flex p-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  )
}

export default Home