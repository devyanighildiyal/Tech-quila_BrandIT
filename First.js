import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';

const First = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <Link to="/login">
          <button className="btn btn-outline-light">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-outline-light">Signup</button>
        </Link>
      </div>
      <div className="home-content">
        <h1>
          {'OptiFit'.split('').map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
          ))}
        </h1>
        <h2 className="tagline">Your Optimal Fitness Partner</h2>
      </div>
    </div>
  );
};

export default First;
