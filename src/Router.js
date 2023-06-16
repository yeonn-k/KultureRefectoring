import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import EventList from './pages/EventList/EventList.jsx';
import EventDetail from './pages/EventDetail/EventDetail.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import MyPage from './pages/MyPage/MyPage.jsx';
import MyToken from './pages/MyToken/MyToken.jsx';
import Home from './pages/Home/Home.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<EventList />} />
        <Route path="/event" element={<EventDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/token" element={<MyToken />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
