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
                            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                        </li>
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/user" style={{ color: 'white', textDecoration: 'none' }}>User</Link>
                        </li>
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/user?id=1" style={{ color: 'white', textDecoration: 'none' }}>User Search Query</Link>
                        </li>
                        <li style={{ display: 'inline', margin: '0 10px' }}>
                            <Link to="/user/1" style={{ color: 'white', textDecoration: 'none' }}>User Dynamic</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
