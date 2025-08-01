import React from "react";
import Footer from "../components/footer";
import RegisterForm from "../components/registerForm";

const Register = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <RegisterForm/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Register