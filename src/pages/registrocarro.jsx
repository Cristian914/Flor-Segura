import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Registrocarro from "../components/registrocarro";


const RegisterCar = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div>
                    <Registrocarro/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RegisterCar