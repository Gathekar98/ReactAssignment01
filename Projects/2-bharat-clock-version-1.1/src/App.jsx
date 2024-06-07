import Clockheading from "./components/Clockheading"
import ClockSlogan from "./components/ClockSlogan"
import ClockCurrentTime from "./components/ClockCurrentTime"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  return <div className="text-center">
  <Clockheading></Clockheading>
  <ClockSlogan></ClockSlogan>
  <ClockCurrentTime></ClockCurrentTime>
  </div>
}

export default App
