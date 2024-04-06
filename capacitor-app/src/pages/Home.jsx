import { useState, useRef } from "react";
import Map from "../components/Maps";
import { GiPoliceOfficerHead, GiSmallFire, GiAmbulance } from "react-icons/gi";
import { MdOutlineRailwayAlert } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { GrUserFemale } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "../components/SideBar";
import { RxCross1 } from "react-icons/rx";
import { LocalNotifications } from "@capacitor/local-notifications";
const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleSidebarToggle = () => {
        setShowMenu(!showMenu);
    };
    const handleTriggerSOS = async () => {
        let options = {
            notifications: [
                {
                    id: 111,
                    title: "Reminder Notification",
                    body: "Explore new variety and offers",
                    largeBody: "Get 30% discounts on new products",
                    summaryText: "Exciting offers!!!",
                },
            ],
        };
        try {
            await LocalNotifications.schedule(options);
        } catch (err) {
            alert(err);
        }
        console.log("SOS Triggered");
    };

    return (
        <section className="">
            {/* Sidebar Toggle */}
            <div className="flex fixed w-full">
                <div
                    className=" flex justify-start my-auto px-4 text-xl z-50"
                    onClick={handleSidebarToggle}
                >
                    {showMenu ? <RxCross1 /> : <FaBarsStaggered />}
                </div>
                <div className="w-screen py-1 text-2xl font-bold flex justify-center">
                    <img
                        src="https://anuraksha-bucket.s3.ap-south-1.amazonaws.com/assets/logo-english.png"
                        alt="logo-main"
                        className="h-12 pr-8"
                    />
                </div>
            </div>
            {showMenu && <SideBar setShowMenu={setShowMenu} showMenu={showMenu} />}
            <div className="flex flex-col justify-between w-full h-screen items-center">
                {/* Map */}
                <div className="h-2/3 w-full p-2 pt-14 rounded-lg">
                    <div className="h-full  w-full">
                        <Map />
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex absolute z-20 top-[51%] justify-center items-center">
                    <button
                        onClick={handleTriggerSOS}
                        className=" bg-red-800 border-red-900 relative cursor-pointer inline-flex items-center rounded-full px-12 py-14 text-3xl font-mono font-semibold text-white  border-2 border-rose-600 border-double active:scale-90 duration-150"
                    >
                        SOS
                    </button>
                </div>
                {/* Other Menu */}
                <div className="h-1/3 w-full px-2 py-2 z-30 bg-background-color">
                    <div className="h-full  w-full grid grid-cols-3 gap-x-2 justify-center items-center">
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <GiPoliceOfficerHead />
                            </div>
                            <p className="text-center">Police</p>
                        </div>
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <GiSmallFire />
                            </div>
                            <p className="text-center">Fire Brigade</p>
                        </div>
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <GiAmbulance />
                            </div>
                            <p className="text-center">Ambulance</p>
                        </div>
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <MdOutlineRailwayAlert />
                            </div>
                            <p className="text-center">Railway related Issue</p>
                        </div>
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <FaChildren />
                            </div>
                            <p className="text-center text-wrap">Child related Issues</p>
                        </div>
                        <div className="flex flex-col">
                            <div className=" border border-primary flex items-center justify-center py-2 rounded-lg text-6xl">
                                <GrUserFemale />
                            </div>
                            <p className="text-center">Women security issue</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
