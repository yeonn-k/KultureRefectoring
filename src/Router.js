import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import EventList from './pages/EventList/EventList.jsx';
import EventDetail from './pages/EventDetail/EventDetail.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import MyDashboard from './pages/MyDashboard/MyDashboard.jsx';
import MyAccount from './pages/MyAccount/MyAccount.jsx';
import MyToken from './pages/MyToken/MyToken.jsx';
import MyAuction from './pages/MyAuction/MyAuction.jsx';
import Home from './pages/Home/Home.jsx';
import Callback from './pages/Callback/Callback.jsx';
import Reviews from './pages/Reviews/Reviews.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<EventList />} />
        <Route path="/event" element={<EventDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/dashboard" element={<MyDashboard />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/token" element={<MyToken />} />
        <Route path="/auction" element={<MyAuction />} />
        <Route path="/oauth/callback/kakao" element={<Callback />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
