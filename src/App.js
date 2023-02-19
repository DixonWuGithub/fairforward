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


function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
