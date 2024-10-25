import {useState} from 'react'

export default function EmailValidation() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange=(e)=>{
        setEmail(e.target.value);
        setError('');
    }

    const validateEmail=()=>{
        const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email){
            setError('Email is required');
            return false;
        }else if(!check.test(email)){
            setError('Email is invalid');
            return false;
        }else{
            setError('Email is valid');
            return true;
        }
    }

    const handleSubmit=(e)=>{   
        e.preventDefault();
        const val = validateEmail();
        if(val){
            alert('Email is valid');
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
                value={email}
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