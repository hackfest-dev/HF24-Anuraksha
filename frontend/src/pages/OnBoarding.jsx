import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

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
                    <div className='flex mx-auto pt-10 pb-20 justify-center'>
                        <h1 className=' text-4xl'>Anuraksha</h1>
                    </div>
                    {/* form */}
                    <div className=' flex flex-col gap-y-4 p-1'>
                        <h2 className=' text-2xl font-bold text-center'>
                            Update Emergency Contact
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex  flex-col gap-y-8 text-lg p-4 sm:p-4 rounded-xl '>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='text'
                                        className=''
                                    >
                                        Contact 1
                                    </label>
                                    <input
                                        type='number'
                                        id='contact1'
                                        name='contact1'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter Contact 1 '
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='text'
                                        className=''
                                    >
                                        Contact 2
                                    </label>
                                    <input
                                        type='number'
                                        id='contact1'
                                        name='contact1'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter Contact 2 '
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='text'
                                        className=''
                                    >
                                        Contact 3
                                    </label>
                                    <input
                                        type='number'
                                        id='contact1'
                                        name='contact1'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter Contact 3 '
                                        onChange={handleChange}
                                    />
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
