import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Footer, Header } from './components';
import { About, Articles, Home, Products, Projects } from './views';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/products" component={Products} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
