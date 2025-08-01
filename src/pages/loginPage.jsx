import React from "react";
import Footer from "../components/footer";
import LoginForm from "../components/loginform";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
