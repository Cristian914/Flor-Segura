import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RegisterForm from "../components/registerForm";

const Register = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div>
                    <RegisterForm/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Register