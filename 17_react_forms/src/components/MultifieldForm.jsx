import { useState } from 'react';

const MultiFieldForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value })); //we have destructed here to keep the old values
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    };

    return (
        <>
            <h2>MultiField Forms</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    Name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    Select Item:
                    <select
                        name="options"
                        value={inputs.options || ""}
                        onChange={handleChange}
                        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default MultiFieldForm;