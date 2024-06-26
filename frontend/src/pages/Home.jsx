import { useState, useRef } from "react";
import Map from "../components/Maps";
import { GiPoliceOfficerHead, GiSmallFire, GiAmbulance } from "react-icons/gi";
import { MdOutlineRailwayAlert } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { GrUserFemale } from "react-icons/gr";
import Navbar from "../components/Navbar";
import { CapacitorHttp } from '@capacitor/core';

const Home = () => {
    const latitude = "13.182976";
    const longitude = "74.934208";
    const user_id = 10;
    const handleSos = async () => {
        const options = {
            url: "https://4b34-117-236-190-193.ngrok-free.app/triggerSOS",
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            data: {
                latitude: latitude,
                longitude: longitude,
                user_id: user_id,
            },
        };

        const response = await CapacitorHttp.post(options);
    };
    return (
        <section className=''>
            {/* Sidebar Toggle */}
            <Navbar />

            <div className='flex flex-col justify-between w-full h-screen items-center'>
                {/* Map */}
                <div className='h-2/3 w-full p-2 pt-14 rounded-lg'>
                    <div className='h-full  w-full'>
                        <Map />
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex z-20 justify-center items-center'>
                    <button
                        onClick={handleSos}
                        className=' bg-red-800 border-red-900 relative cursor-pointer inline-flex items-center rounded-full px-8 sm:px-12 py-10 sm:py-14 text-2xl sm:text-3xl font-mono font-semibold text-white  border-2 border-rose-600 border-double active:scale-90 duration-150'
                    >
                        SOS
                    </button>
                </div>
                {/* Other Menu */}
                <div className='h-1/3 w-full px-2 py-2 z-30 bg-background-color'>
                    <div className='h-full  w-full grid grid-cols-3 gap-x-1 gap-y-2 sm:gap-y-0 sm:gap-x-2 justify-center items-center'>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:100'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <GiPoliceOfficerHead />
                                </div>
                                <p className='text-center text-sm'>Police</p>
                            </a>
                        </div>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:101'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <GiSmallFire />
                                </div>
                                <p className='text-center text-sm'>Fire Brigade</p>
                            </a>
                        </div>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:108'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <GiAmbulance />
                                </div>
                                <p className='text-center text-sm'>Ambulance</p>
                            </a>
                        </div>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:139'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <MdOutlineRailwayAlert />
                                </div>
                                <p className='text-center text-sm'>Railway related Issue</p>
                            </a>
                        </div>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:112'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <FaChildren />
                                </div>
                                <p className='text-center text-sm'>Child related Issues</p>
                            </a>
                        </div>
                        <div className='flex flex-col sm:px-8'>
                            <a href='tel:112'>
                                <div className=' border border-primary flex items-center justify-center py-1 sm:py-2 rounded-lg text-5xl sm:text-6xl cursor-pointer active:scale-90 duration-150'>
                                    <GrUserFemale />
                                </div>
                                <p className='text-center text-sm'>Women security issue</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
