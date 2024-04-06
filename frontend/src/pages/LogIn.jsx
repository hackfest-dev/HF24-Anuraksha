import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(""); // State for OTP [default: ""
    const [showErrorMessage, setShowErrorMessage] = useState(false); // State for error message
    const [otpForm, showOtpForm] = useState(false); // State for OTP form [default: false
    const navigate = useNavigate();

    const NumberhandleChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const OtphandleChange = (event) => {
        setOtp(event.target.value.slice(0, 6)); // Update OTP state and limit to max 6 digits
    };
    const isValidNumber = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidNumber) {
            setShowErrorMessage(true); // Show error message on invalid submit
        } else {
            // Proceed with OTP logic
            showOtpForm(true);

            localStorage.setItem("phoneNumber", phoneNumber);
        }
    };
    const handleOtpSubmit = (event) => {
        event.preventDefault();
        navigate("/register");
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
                        <h2 className=' text-2xl font-bold text-center'>SignIn</h2>
                        <form onSubmit={otpForm === true ? handleOtpSubmit : handleSubmit}>
                            <div className=' flex  flex-col gap-y-8 text-lg p-4 sm:p-4 rounded-xl '>
                                <div className='flex flex-col text-center'>
                                    <label
                                        htmlFor='number'
                                        className=''
                                    >
                                        Mobile Number
                                    </label>
                                    <input
                                        type='number'
                                        id='number'
                                        name='number'
                                        className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                        placeholder='Enter your 10 digit Number'
                                        value={phoneNumber}
                                        onChange={NumberhandleChange}
                                        style={{ appearance: "textfield" }}
                                    />
                                    {showErrorMessage && (
                                        <p className='text-red-500'>
                                            Please enter a valid 10-digit number
                                        </p>
                                    )}
                                </div>
                                {otpForm && (
                                    <div className='flex flex-col text-center'>
                                        <label
                                            htmlFor='otp'
                                            className=''
                                        >
                                            OTP
                                        </label>
                                        <input
                                            type='number'
                                            id='number'
                                            name='number'
                                            className=' rounded-lg p-2   my-1 w-[80vw] sm:w-[40vw] mx-auto bg-transparent border-b-2 border-primary focus:outline-none focus:border-secondary'
                                            placeholder='Enter your 6 digit Otp'
                                            value={otp}
                                            onChange={OtphandleChange}
                                        />
                                    </div>
                                )}
                                <button
                                    type='submit'
                                    className=' bg-secondary disabled:bg-gray-300 active:bg-primary p-2 rounded-full'
                                    disabled={!isValidNumber} // Disable button if invalid
                                >
                                    {otpForm ? "Verify OTP" : "Get OTP"}
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
