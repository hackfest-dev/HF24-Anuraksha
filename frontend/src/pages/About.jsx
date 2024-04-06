import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <section className=''>
            <Navbar />
            <div className='pt-16 px-4'>
                <h1 className='text-2xl font-bold text-center'>About</h1>
                <p className='py-2'>
                    <span className='font-bold'>Anuraksha</span> is an emergency SOS application
                    designed to provide swift assistance during critical situations. With the simple
                    activation of the SOS command, our app instantly notifies your pre-saved
                    emergency contacts and nearby volunteers, enabling them to promptly reach out
                    and offer assistance.
                </p>
                <span className='font-bold pt-4'>Our Mission At Anuraksha</span>
                <p className=''>
                    , our mission is to ensure the safety and well-being of individuals in times of
                    crisis. We understand that emergencies can occur unexpectedly, and our app is
                    designed to provide a reliable solution for seeking help when it matters most.
                </p>
            </div>
        </section>
    );
};

export default About;
