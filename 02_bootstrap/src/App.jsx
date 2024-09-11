import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table1 from './Table1'
import Notification from './Notification'
import HelloWorld from './HelloWorld'
import BgChanger from './BgChanger'
import Activity1 from './Activity1'
function App() {
  return (
    <>
      {/* <Notification subscribed={true}/>
      <Table1/>
      <HelloWorld/>
      <BgChanger/> */}
      <Activity1 name={["Vansh","Yash","Harshit","Aman","Tapasendra"]} company={["Google","Microsoft","Amazon","Startup","Meta"]}/>
    </>
  )
}

export default App
