import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginform";

const Login = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div>
                    <LoginForm/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Login