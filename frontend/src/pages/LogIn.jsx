import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CapacitorHttp } from '@capacitor/core';


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

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the phone number from the form
        // Format the phone number with country code for Twilio
        const formattedPhoneNumber = "+91" + phoneNumber;

        try {
            const options = {
                url: "https://verify.twilio.com/v2/Services/VA1faf08387222a9faafa4ab851f7e7352/Verifications",
                headers: {
                    Authorization: "Basic " +
                        btoa(
                            "AC39a709bca877af451d9767d92dc08de9:6333ad2d635cb392ef334956745c6b87"
                        ),
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: "POST",
                data: {
                    To: formattedPhoneNumber,
                    Channel: "sms",
                },
            };

            const response = await CapacitorHttp.post(options);

            if (response) {
                console.log("Verification code sent!");
                showOtpForm(true); // Show OTP form on successful verification
            } else {
                console.error("Error sending verification:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleOtpSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        const formattedPhoneNumber = "+91" + phoneNumber;

        try {
            const options = {
                url: "https://verify.twilio.com/v2/Services/VA1faf08387222a9faafa4ab851f7e7352/VerificationCheck",
                headers: {
                    Authorization: "Basic " +
                        btoa(
                            "AC39a709bca877af451d9767d92dc08de9:6333ad2d635cb392ef334956745c6b87"
                        ),
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: "POST",
                data: {
                    To: formattedPhoneNumber,
                    Code: otp,
                },
            };

            const response = await CapacitorHttp.post(options);

            if (response) {
                console.log("Verification successful!");
                navigate("/register");
                localStorage.setItem("phoneNumber", phoneNumber);
                // Handle successful verification
            } else {
                console.error("Verification failed:", response.status);
                // Handle failed verification
            }
        } catch (error) {
            console.error("Error:", error);
        }
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
                        <form onSubmit={handleSubmit}>
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

                                <button
                                    type='submit'
                                    className={` bg-secondary disabled:bg-gray-300 active:bg-primary p-2 rounded-full  ${otpForm && "hidden"
                                        }`}
                                    disabled={!isValidNumber} // Disable button if invalid
                                >
                                    Get OTP
                                </button>
                            </div>
                        </form>
                        {otpForm && (
                            <form onSubmit={handleOtpSubmit}>
                                <div className='flex flex-col gap-y-4'>
                                    <div className='flex flex-col text-center'>
                                        <label
                                            htmlFor='otp'
                                            className=' font-semibold text-xl'
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
                                    <button
                                        type='submit'
                                        className={` bg-secondary disabled:bg-gray-300 active:bg-primary p-2 py-4 rounded-full flex justify-center w-full ${!otpForm && "hidden"
                                            }`}
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;
