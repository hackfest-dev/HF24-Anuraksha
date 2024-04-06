import React from "react";
import Navbar from "../components/Navbar";

const Volunteer = () => {
    return (
        <section className=''>
            <Navbar />
            <div className='pt-14'>
                <h1 className='text-xl font-bold text-center'>Volunteer Profile</h1>
                <div className='p-4 pt-8'>
                    <h3 className=' text-xl underline'>Personal Information</h3>
                    <p>
                        Name: <span className='text-lg '>John Doe</span>
                    </p>
                    <p>
                        Email: <span className='text-lg '>john.doe@example.com</span>{" "}
                    </p>
                    <p>
                        Phone: <span className='text-lg '>+979876543210</span>
                    </p>
                </div>
                <div className='flex justify-between px-4'>
                    <p className=''>KYC Status </p>
                    <p className=''>verified ✅</p>
                </div>
                <div className=' flex p-4 justify-between'>
                    <p className=' text-lg font-semibold'>Switch to Volunteer Profile</p>
                    <div className=''>
                        <label class='relative inline-flex items-center cursor-pointer'>
                            <input
                                class='sr-only peer'
                                value=''
                                type='checkbox'
                            />
                            <div class="peer rounded-full outline-none duration-100 after:duration-500 w-24 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white"></div>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
