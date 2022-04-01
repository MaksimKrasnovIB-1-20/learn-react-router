import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactsPage from './Components/Pages/ContactsPage';
import NotFoundPage from './Components/Pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <HomePage /> }></Route>
          <Route path="about" element={ <AboutPage /> }></Route>
          <Route path="contacts" element={ <ContactsPage /> }></Route>
          <Route path="*" element={ <NotFoundPage /> }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
