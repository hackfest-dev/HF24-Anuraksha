import React from "react";
import Navbar from "../components/Navbar";

const Settings = () => {
    return (
        <section>
            <Navbar />
            <div className='py-16 px-4'>
                <h1 className='text-2xl font-bold text-center'>Settings</h1>

                <h2 className='text-lg font-semibold mb-4'>General Settings</h2>
                <div className='flex justify-between items-center mb-4'>
                    <label
                        htmlFor='darkMode'
                        className='mr-2'
                    >
                        Restrict Background Data:
                    </label>
                    <input
                        type='checkbox'
                        id='darkMode'
                        className='form-checkbox'
                        // Add your logic for handling dark mode here
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label
                        htmlFor='notifications'
                        className='mr-2'
                    >
                        Notifications:
                    </label>
                    <input
                        type='checkbox'
                        id='notifications'
                        className='form-checkbox'
                    />
                </div>
            </div>
        </section>
    );
};

export default Settings;
