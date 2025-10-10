import React from "react";
import Footer from "../components/footer";
import LoginMotoForm from "../components/loginMotoForm";

const LoginMotoPage = ({ setIsLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <LoginMotoForm setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Footer />
    </div>
  );
};

export default LoginMotoPage;
