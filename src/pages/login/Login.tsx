import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/react-router-testing/user");
  };
  return (
    <>
      <img width={60} height={60} src="assets/Profile.png" />
      <div>Login</div>
      <button onClick={navigateTo}>User</button>
    </>
  );
};

export default Login;
