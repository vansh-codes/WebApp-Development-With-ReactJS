import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Table from './Table'

function App() {
  const roomDetails = [
    {
      Room: "Room C", Location: "Chicago", Rent: "$800", Size: "150 sq ft"
    },
    {
      Room: "Room B", Location: "Los Angeles", Rent: "$1000", Size: "180 sq ft"
    },
    {
      Room: "Room A", Location: "New York", Rent: "$1200", Size: "200 sq ft"
    }    
  ]
  return (
    <>
      <h1>Room Rentals</h1>
      <Table roomDetails={roomDetails}/>
      <ul>
      {
        roomDetails.map((loc, index) => (
          <li key={index}>
            {loc.Location}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
