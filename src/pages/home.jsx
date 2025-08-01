import React from "react";
import Footer from "../components/footer"
import Hero from "../components/hero";


const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                    <Hero/>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home;
