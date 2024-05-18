import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/react-router-testing/user");
  };
  return (
    <>
      <div>Login</div>
      <button onClick={navigateTo}>User</button>
    </>
  );
};

export default Login;
