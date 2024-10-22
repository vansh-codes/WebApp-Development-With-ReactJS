import { useState } from 'react';

export default function Addition() {
    const [inputs, setInput] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(function (values) {
            return { ...values, [name]: value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(Number(inputs['num1']) + Number(inputs['num2']));
    };
    return (
        <>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
                <div>
                    <h1>Activity: Addition</h1>
                </div>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Number1:
                    <input
                        type="number"
                        name="num1"
                        value={inputs.num1 || ""}
                        onChange={handleChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    Number2:
                    <input
                        type="number"
                        name="num2"
                        value={inputs.num2 || ""}
                        onChange={handleChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Add</button>
            </form>
        </>
    );
}
