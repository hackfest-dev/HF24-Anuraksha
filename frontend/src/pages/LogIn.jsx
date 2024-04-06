import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false); // State for error message
    const navigate = useNavigate();

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const isValidNumber = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidNumber) {
            setShowErrorMessage(true); // Show error message on invalid submit
        } else {
            // Proceed with OTP logic
            navigate("/login-confirm");

            console.log("Valid phone number:", phoneNumber);
        }
    };

    return (
        <section className='p-10 flex justify-center items-center w-full h-full'>
            <div className=' h-full flex justify-center'>
                <div className='  '>
                    {/* logo */}
                    <div className='flex mx-auto pt-10 pb-20 justify-center'>
                        <h1 className=' text-4xl'>Anuraksha</h1>
                    </div>
                    {/* form */}
                    <div className=' flex flex-col gap-y-4 p-2'>
                        <h2 className=' text-xl text-center'>SignIn</h2>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex  flex-col gap-y-8 text-lg p-4 border border-primary rounded-xl drop-shadow-lg shadow-md '>
                                <div className='flex flex-col text-center'>
                                    <label
                                        htmlFor='email'
                                        className=''
                                    >
                                        Mobile Number
                                    </label>
                                    <input
                                        type='number'
                                        id='email'
                                        name='email'
                                        className=' rounded-lg p-1 my-1'
                                        placeholder='Enter your 10 digit Number'
                                        value={phoneNumber}
                                        onChange={handleChange}
                                    />
                                    {showErrorMessage && (
                                        <p className='text-red-500'>
                                            Please enter a valid 10-digit number
                                        </p>
                                    )}
                                </div>
                                <button
                                    type='submit'
                                    className=' bg-secondary disabled:bg-gray-300 active:bg-primary p-2 '
                                    disabled={!isValidNumber} // Disable button if invalid
                                >
                                    Get OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;
