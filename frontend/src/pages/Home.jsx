import Map from "../components/Maps";
import { GiPoliceOfficerHead, GiSmallFire, GiAmbulance } from "react-icons/gi";

const Home = () => {
    return (
        <section className=''>
            {/* Sidebar Toggle */}
            <div className='flex fixed w-full'>
                <div className=' flex justify-start'>sid</div>
                <div className='t text-center w-screen py-2 text-2xl'>ANURAKSHA</div>
            </div>
            <div className='flex flex-col justify-between w-full h-screen items-center'>
                {/* Map */}
                <div className='h-2/3 w-full p-2 pt-10 rounded-lg'>
                    <div className='h-full  w-full'>
                        <Map />
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex absolute z-30 top-[50%] justify-center items-center'>
                    <button className=' bg-background-color relative cursor-pointer inline-flex items-center rounded-full px-10 py-12 text-3xl font-mono font-semibold text-rose-600  border-2 border-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 active:bg-rose-700 duration-300  focus:bg-transparent'>
                        SOS
                    </button>
                </div>
                {/* Other Menu */}
                <div className='h-1/3 w-full px-2 py-2 z-40 bg-background-color'>
                    <div className='h-full  w-full grid grid-cols-3 gap-x-2 justify-center items-center'>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiPoliceOfficerHead />
                            </div>
                            <p className='text-center'>Police</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiSmallFire />
                            </div>
                            <p className='text-center'>Fire Brigade</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiAmbulance />
                            </div>
                            <p className='text-center'>Ambulance</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiPoliceOfficerHead />
                            </div>
                            <p className='text-center'>Police</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiPoliceOfficerHead />
                            </div>
                            <p className='text-center'>Police</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' border border-primary flex items-center justify-center py-2 rounded-lg text-6xl'>
                                <GiPoliceOfficerHead />
                            </div>
                            <p className='text-center'>Police</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
