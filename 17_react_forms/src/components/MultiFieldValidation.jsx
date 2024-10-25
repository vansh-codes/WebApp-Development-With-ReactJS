import {useState} from 'react'

export default function EmailPwdValidation() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        pwd: '',
        gender: '',
        dateOfBirth: ''
    });
    const [error, setError] = useState('');

    const handleChange=(e)=>{
        const inputName = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [inputName]: value}));
        setError('');
    }

    const validate=()=>{
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pwdCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const { username, email, pwd, gender, dateOfBirth } = inputs;
        if(!email || !pwd || !username || !gender || !dateOfBirth){
            setError('Fill all the fields');
            return false;
        }else if(!emailCheck.test(email)){
            setError('Email is invalid');
            return false;
        }else if(pwd.length<6 || !pwdCheck.test(pwd)){
            setError('Password must be 6 characters long and contain at least one letter and one number');
            return false;
        }else{
            setError('Validated');
            return true;
        }
    }

    const handleSubmit=(e)=>{   
        e.preventDefault();
        const isValid = validate();
        if(isValid){
            alert('Validated');
        } 
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
            <div>
            <h1>Email Validation</h1>
            </div>
            <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
            Password:
            <input
                type="password"
                name="pwd"
                value={inputs.pwd || ""}
                onChange={handleChange}
                style={{ marginLeft: '10px' }}
            />
            </label>
            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Validate</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </form>
    </div>
  )
}