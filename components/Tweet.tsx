import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div className="card">
        <style jsx>{`
          .card {
            margin: 1rem;
            flex-basis: 90%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            cursor: pointer;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #39e;
            border-color: #39e;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}</style>
      </div>
    );
  }
}

export default Tweet;
