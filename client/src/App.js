import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Router, Redirect } from '@reach/router';
import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path="authors" />
        <NewAuthor path="autors/new"/>
        <EditAuthor path="authors/:id/edit"/>
        <Redirect
        from="/"
        to="/authors"
        noThrow/>
      </Router>
    </div>
  );
}

export default App;
