import { useRef } from 'react'

export default function UncontrollableForms() {
    const inputRef=useRef(null);
    function handleSubmit(){
        alert(inputRef.current.value);
    }
return (
    <>
        <h2>Uncontrollable Forms</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',  }}>
                <label style={{ marginBottom: '10px' }}> Name:</label>
                <input type="text" name="name" ref={inputRef} style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <button type="submit" style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}> Submit</button>
        </form>
    </>
)
}
