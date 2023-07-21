import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import SignIn from "./SIgnIn";
import { ProtectedAuthPages, ProtectedPages } from "./ProtectedPage";
import Dashboard from "./Dashboard";
//  RequireAuth is not working due to Requirement of BrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route element={<ProtectedAuthPages />}>
        <Route path="/signin" element={<SignIn />} />
      </Route>
      <Route element={<ProtectedPages />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
