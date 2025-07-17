import React from "react";
import Footer from "../components/footer";
import HeroMoto from "../components/heroMotorista";
import Navbar from "../components/navbar";

const Motorista =()=>{
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div>
            <HeroMoto />
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Motorista