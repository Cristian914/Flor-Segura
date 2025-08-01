import React from "react";
import Footer from "../components/footer";
import Registrocarro from "../components/registrocarro";


const Register = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <Registrocarro/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Register