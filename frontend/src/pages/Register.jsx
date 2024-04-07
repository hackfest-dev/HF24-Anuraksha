import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [selectedGender, setSelectedGender] = useState("");
    const [volunteer, setIsVolunteer] = useState(false);

    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const phone = localStorage.getItem("phoneNumber");
        const name = formData.get("name");
        const dob = formData.get("DoB");
        const gender = selectedGender;
        const is_volunteer = true;

        const data = {
            name,
            phone,
            dob,
            gender,
            state: "Karnataka",
            current_location: "Bangalore",
            is_volunteer,
            language: "English",
        };
        console.log(data);

        try {
            const response = await fetch("https://4b34-117-236-190-193.ngrok-free.app/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle successful response
                navigate("/onboarding");
            } else {
                // Handle error response
                console.error("Registration failed");
            }
        } catch (error) {
            // Handle network error
            console.error("Network error:", error);
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
                                        disabled={true}
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
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Sign-up as Volunteer?</p>
                                    <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                        <input
                                            className='sr-only peer'
                                            value=''
                                            type='checkbox'
                                            name='volunteer'
                                            onChange={() => setIsVolunteer(!volunteer)}
                                        />
                                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-20 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['Yes'] peer-checked:after:border-white"></div>
                                    </label>
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
