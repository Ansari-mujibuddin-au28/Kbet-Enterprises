import React from 'react';
import { stats } from '../constants';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <i className={`fas ${stat.icon}`}></i>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;