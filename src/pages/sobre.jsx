import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardAbout from "../components/cardAbout";

const Sobre = () => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                <CardAbout/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sobre