import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/NavBar/Navigation'
import SearchGuests from './components/Guests/SearchGuests'
import ActiveReviews from './components/Reviews/ActiveReviews'
import MakeReview from './components/Reviews/MakeReview'


function App() {
  const navLinks = [
    {
      text: 'Buscar huésped',
      path: '/'
    },
    {
      text: 'Alojados',
      path: '/guests'
    }
  ]
  return (
    <Router>
      <Navigation navLinks={navLinks} />
      <Route path='/' exact component={SearchGuests} />
      <Route path='/guests' exact component={ActiveReviews} />
      <Route path='/guests/review' component={MakeReview} />
    </Router>
  );
}

export default App;
