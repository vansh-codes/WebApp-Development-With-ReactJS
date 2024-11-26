import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

Tablu.propTypes = {
    name: PropTypes.array,
    company: PropTypes.array
}

export default function Tablu(props) {
    const names = props.name;
    const companies = props.company;
    return (
        <>
            <p>Details</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
               
                <tbody>
                    {names.map((name, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{companies[index]}</td>
                            <td>India</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}