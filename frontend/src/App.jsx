// import React from 'react'
// import HomePage from './components/Home/HomePage'
// import Service from './components/Service/Service'

// const App = () => {
//   return (
//     <div>
//       <HomePage />
//       <Service />
//     </div>
//   )
// }

// export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import Service from './components/Service/Service'
import BookingPage from './components/BookingPage/BookingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<Service />} />
      <Route path="/booking/:name" element={<BookingPage />} />
    </Routes>
  );
}