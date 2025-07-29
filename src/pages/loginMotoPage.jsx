import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginMotoForm from "../components/loginMotoForm";

const LoginMoto = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div>
                    <LoginMotoForm/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default LoginMoto;