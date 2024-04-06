import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "../components/SideBar";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleSidebarToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <div className='flex fixed w-full'>
                <div
                    className=' flex justify-start my-auto px-4 text-xl z-50'
                    onClick={handleSidebarToggle}
                >
                    {showMenu ? <RxCross1 /> : <FaBarsStaggered />}
                </div>
                <div className='w-screen py-1 text-2xl font-bold flex justify-center'>
                    <img
                        src='https://anuraksha-bucket.s3.ap-south-1.amazonaws.com/assets/logo-english.png'
                        alt='logo-main'
                        className='h-12 pr-12'
                    />
                </div>
            </div>

            {showMenu && (
                <SideBar
                    setShowMenu={setShowMenu}
                    showMenu={showMenu}
                />
            )}
        </>
    );
};

export default Navbar;
