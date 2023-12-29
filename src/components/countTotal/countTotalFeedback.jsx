import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const CountTotalFeedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return <p className="total">Total: {total}</p>;
};

export default CountTotalFeedback;
