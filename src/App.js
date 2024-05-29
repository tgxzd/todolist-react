
import React from 'react';
import Navbar from './Navbar';
import ToDo from './ToDo'; 
import {Helmet} from "react-helmet";


const App = () => {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Todo List App by TGXZD</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
      <Navbar />
      <div className="bg-dark p-2" style={{ opacity: 1 }}>
        <div>
          <ToDo />
          <h4 className="text-primary display-6 col text-left">
            <small>Developed by tgxzd</small>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default App;

