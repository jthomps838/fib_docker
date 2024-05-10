import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </header>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
