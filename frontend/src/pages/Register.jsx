import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [selectedGender, setSelectedGender] = useState("");

    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/u1/onboarding");
    };

    return (
        <section className='px-24 sm:p-10 flex justify-center items-center w-full h-full overflow-hidden'>
            <div className=' h-full flex justify-center'>
                <div className='  '>
                    {/* logo */}
                    <div className='flex mx-auto pt-10 pb-20 justify-center'>
                        <img
                            src='https://anuraksha-bucket.s3.ap-south-1.amazonaws.com/assets/logo-english.png'
                            alt='logo-main'
                            className='h-14'
                        />
                    </div>
                    {/* form */}
                    <div className=' flex flex-col gap-y-4 p-1'>
                        <h2 className=' text-2xl font-bold text-center'>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex  flex-col gap-y-8 text-lg p-4 sm:p-4 rounded-xl '>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='text'
                                        className=''
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type='number'
                                        id='number'
                                        name='number'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder={localStorage.getItem("phoneNumber")}
                                        disabled='true'
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
                                        id='name'
                                        name='name'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter your Name '
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='DoB'
                                        className=''
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        type='date'
                                        id='DoB'
                                        name='DoB'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter your Date of Birth '
                                    />
                                </div>
                                <div className='flex flex-col text-start'>
                                    <label
                                        htmlFor='text'
                                        className=''
                                    >
                                        Gender
                                    </label>
                                    <select
                                        name='gender'
                                        id='gender'
                                        value={selectedGender}
                                        onChange={handleChange}
                                        className=' bg-transparent rounded-lg border-b border-primary'
                                    >
                                        <option value=''>Please select</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </select>
                                </div>

                                <button
                                    type='submit'
                                    className=' bg-secondary disabled:bg-gray-300 active:bg-primary p-2 rounded-full'
                                >
                                    Next
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
