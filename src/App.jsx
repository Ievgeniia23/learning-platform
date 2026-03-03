import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Layout from './components/Layout/Layout.jsx';
import LessonsList from './pages/LessonsList/LessonsList.jsx';
import LessonPage from './pages/LessonPage/LessonPage.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LessonsList />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
