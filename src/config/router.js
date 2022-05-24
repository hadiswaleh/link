import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";


import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";



export default function AppRouter() {
  
    return(
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
 );
}
