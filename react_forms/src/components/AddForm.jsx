import { useState } from 'react';
export default function Addform() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The entered name is ${name}`)
    }
    return (
        <>
            <h2>Forms</h2>
            <form onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', width: '300px', margin: '0 auto' }}
            >
                <label
                    style={{ marginBottom: '10px' }}
                >Enter Your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }}
                    />
                </label>
                <input type='submit'
                    style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}
                />
            </form>
        </>
    )
}