import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Search from './Components/Search';
import Flights from './Components/Flights';
import Trains from './Components/Trains';
import Hotels from './Components/Hotels';
import Itinerary from './Components/Itinerary';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import ApiInput from './Components/ApiInput';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ApiInput" element={<ApiInput />} />
        <Route path="*" element={<div>404 Message</div>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;