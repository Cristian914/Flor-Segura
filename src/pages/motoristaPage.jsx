import React from "react";
import Footer from "../components/footer";
import HeroMoto from "../components/heroMotorista";

const Motorista =()=>{
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <div>
            <HeroMoto />
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Motorista