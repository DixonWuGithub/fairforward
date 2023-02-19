import './App.scss';
import { useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import About from "./pages/About/About";
import Explore from './pages/Explore/Explore';
import SignUp from "./pages/SignUp/SignUp"
import Profile from "./pages/Profile/Profile"
import Footer from "./components/Footer/Footer"
import Booking from "./pages/Booking/Booking"


function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mentor, setMentor] = useState("Patricia Yoo")

  return (
    <div className="App">
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/explore" element={<Explore setMentor={setMentor}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/booking/" element={<Booking mentor={mentor}/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
