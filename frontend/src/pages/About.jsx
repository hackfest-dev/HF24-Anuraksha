import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <section className=''>
            <Navbar />
            <div className='pt-16'>
                <h1 className='text-2xl font-bold text-center'>About</h1>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt animi
                    recusandae hic corporis provident modi, vitae quas error maxime ducimus,
                    inventore libero possimus, dolorum praesentium veritatis! Eaque, amet officia?
                </p>
            </div>
        </section>
    );
};

export default About;
