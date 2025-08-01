import React from "react";
import Footer from "../components/footer";
import Registermoto from "../components/RegisterMoto";

const RegistermotoPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <Registermoto/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RegistermotoPage