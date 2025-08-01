import React from "react";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";


const ContactPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div>
                 <ContactForm/>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default ContactPage;