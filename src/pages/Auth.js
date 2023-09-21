import SignUp from "../components/Signup";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import ForgetPassword from "../components/ForgetPassword";
import { Routes, Route } from "react-router-dom";

function Auth() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default Auth;