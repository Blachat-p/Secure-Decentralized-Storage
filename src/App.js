// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from './Upload';
import Retrieve from './Retrieve';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/upload">Upload</Link>
          <Link to="/retrieve">Retrieve</Link>
        </nav>
        <Route path="/upload" component={Upload} />
        <Route path="/retrieve" component={Retrieve} />
      </div>
    </Router>
  );
}

export default App;
