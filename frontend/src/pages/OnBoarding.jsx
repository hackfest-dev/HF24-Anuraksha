import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const handleChange = (event) => {};

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    };

    return (
        <section className='px-24 sm:p-10 flex justify-center items-center w-full h-full overflow-hidden'>
            <div className=' h-full flex justify-center'>
                <div className='  '>
                    {/* logo */}
                    <div className='flex mx-auto pt-10 pb-10 justify-center'>
                        <img
                            src='https://anuraksha-bucket.s3.ap-south-1.amazonaws.com/assets/logo-english.png'
                            alt='logo-main'
                            className='h-14'
                        />
                    </div>
                    {/* form */}
                    <div className=' flex flex-col gap-y-2 p-1 '>
                        <h2 className=' text-2xl font-bold text-center'>Add Emergency Contact</h2>
                        <p className=' px-8 text-sm'>
                            Add up to 3 emergency contacts who will be notified in case of an
                            emergency
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex  flex-col gap-y-8 text-lg p-4 sm:p-4 rounded-xl'>
                                <div className='h-[50vh] overflow-auto'>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name1'
                                            name='name1'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            type='number'
                                            id='contact1'
                                            name='contact1'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter Contact Number'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name2'
                                            name='name2'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            type='number'
                                            id='contact2'
                                            name='contact2'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter Contact Number'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name3'
                                            name='name3'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col text-start'>
                                        <label
                                            htmlFor='text'
                                            className=''
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            type='number'
                                            id='contact3'
                                            name='contact3'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter Contact Number'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className=' bg-secondary disabled:bg-gray-300 active:bg-primary p-2 rounded-full'
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
