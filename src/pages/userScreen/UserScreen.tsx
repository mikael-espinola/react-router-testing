import React from "react";
import { useNavigate } from "react-router-dom";

const UserScreen = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/react-router-testing");
  };
  return (
    <>
      <div>UserScreen</div>
      <button onClick={navigateTo}>Login</button>
    </>
  );
};

export default UserScreen;
