import { useState } from 'react'

export default function Q2() {
    const [inps, setInps] = useState({
        email: '',
        phone: '',
        dob: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setInps(values => ({ ...values, [inputName]: value }));
        setError('');
    }

    const validate = () => {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneCheck = /^\d{10}$/;
        const { email, phone, dob } = inps;
        if (!email || !phone || !dob) {
            setError('Fill all the fields');
            return false;
        } else if (!emailCheck.test(email)) {
            setError('Email is invalid');
            return false;
        } else if (phone.length < 10 || !phoneCheck.test(phone)) {
            setError('Phone number should be of 10 digits');
            return false;
        } else if (new Date(dob) > new Date()) {
            setError('Date Of Birth must not be in future');
            return false;
        } else {
            setError('Validated');
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            alert('Personal Information is correct ☑️');
        }
    }

    return (
        <div className='w-full flex flex-col border shadow-lg rounded-lg shadow-black mt-8 justify-center items-center'>
            <div className='px-12 py-8 space-y-8 w-full'>
                <h1 className='text-2xl text-center font-bold justify-center items-center'>Personal Information</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col m-6 justify-center items-center space-y-6 px-36'>
                    <input
                        type="text"
                        placeholder='Enter your email'
                        name="email"
                        value={inps.email || ""}
                        onChange={handleChange}
                        className='w-full p-2 rounded-lg'
                        />
                    <input
                        type="tele"
                        placeholder='Enter your phone number'
                        name="phone"
                        value={inps.phone || ""}
                        onChange={handleChange}
                        className='w-full p-2 rounded-lg'
                        />
                    <input
                        type="date"
                        placeholder='Enter your date of birth'
                        name="dob"
                        value={inps.dob || ""}
                        onChange={handleChange}
                        className='w-full p-2 rounded-lg'
                    />
                    <button type="submit" className='w-full bg-blue-500'>Validate & Submit</button>
                    {error && <p className='text-red-500 text-xl'>{error}</p>}
                </form>
            </div>
        </div>
    )
}