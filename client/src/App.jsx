import { Navbar, Home, Dashboard } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App