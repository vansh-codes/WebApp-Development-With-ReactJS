import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    /* 
        Alternate way for searchParams
        const location = useLocation(); // add this import to the top of the file: import { useLocation } from 'react-router-dom';
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
    */

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                if(!response.ok) {
                    setError('Failed to fetch user data');
                    setLoading(false);
                    throw new Error('Failed to fetch user data');
                } else{
                    setUserData(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        if(id)
            fetchData();
    }, [id]);

    return (
        <div>
            {id && userData && (
                <div>
                    <h2>User Details</h2>
                    <p>ID: {userData.id}</p>
                    <p>Name: {userData.name}</p>
                </div>
            )}
            {loading && id && <p>Loading user data...</p>}
            {error && <p>{error}</p>}
            {!id && (
                <h1>User</h1>
            )}
        </div>
    );
};

export default User;