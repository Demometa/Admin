import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nextpage from './Components/Nextpage';
import Centralized from './Components/Centralized';
import Qrcode from './Components/Qrcode';
import Newheader from './Components/Newheader';
import Signup from './Components/Signup';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Newheader></Newheader> */}

        <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route path="/login" element={<Navbar/>}/>
          <Route exact path="/next" element={<Protected Component={Nextpage}/>}/>
          <Route exact path="/centralized" element={<Centralized/>}/>
          <Route exact path="/qrcode" element={<Qrcode/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
