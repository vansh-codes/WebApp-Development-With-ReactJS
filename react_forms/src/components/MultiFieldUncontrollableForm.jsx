import { useRef } from 'react';

export default function MultiFieldUncontrollableForms() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`);
    }

    return (
        <>
            <h2>MultiField Uncontrollable Forms</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                <label style={{ margin: '10px 0' }}>Name:</label>
                <input type="text" name="name" ref={nameRef} style={{ padding: '5px', margin: '10px 0' }} />

                <label style={{ margin: '10px 0' }}>Email:</label>
                <input type="email" name="email" ref={emailRef} style={{ padding: '5px', margin: '10px 0' }} />

                <button type="submit" style={{ padding: '10px 20px', margin: '10px 0', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
            </form>
        </>
    );
}
