import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import LessonPage from './pages/LessonPage/LessonPage.jsx';


import './App.css';
import AllLessonsPage from './pages/AllLessonsPage/AllLessonsPage.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
           <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<AllLessonsPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
