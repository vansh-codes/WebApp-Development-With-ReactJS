import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div style={{ textAlign: 'center' }}>
            <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
                <nav>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        </li>   
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                        </li>
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/todo" style={{ color: 'white', textDecoration: 'none' }}>Todo</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
