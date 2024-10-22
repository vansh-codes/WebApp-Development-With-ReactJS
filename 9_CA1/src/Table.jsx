import PropTypes from 'prop-types';

export default function Table(props) {
    Table.propTypes = {roomDetails: PropTypes.arrayOf(
        PropTypes.shape({Room: PropTypes.string.isRequired,
            Location: PropTypes.string.isRequired,
            Rent: PropTypes.string.isRequired,
            Size: PropTypes.string.isRequired})).isRequired
    }
  return (
    <div>
        <table className="table table-striped table-bordered">
            <thead className="thead-dark">
            <tr>
                <th>Room</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Size</th>
            </tr>
            </thead>
            <tbody>
                {props.roomDetails.map((room, index) => (
                    <tr key={index}>
                        <td>{room.Room}</td>
                        <td>{room.Location}</td>
                        <td>{room.Rent}</td>
                        <td>{room.Size}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
