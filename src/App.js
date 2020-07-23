import React from 'react';
import './App.css';
import Landing from './Landing/OnlineOrder'
import Navbar from './Navbar/Navbar'
import Ordering from './Ordering/Ordering'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/order"><Ordering /></Route>
        <Route path="/"><Landing /></Route>
      </Switch>
        <Footer />

    </div>
  );
}

export default App;
