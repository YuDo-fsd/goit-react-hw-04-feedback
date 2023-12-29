import React from 'react';
// import PropTypes from 'prop-types';

const CountPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  const total = Number(good + neutral + bad);

  const positivePercentage =
    total !== 0 ? Math.round((Number(good) * 100) / total) : 0;

  return <p className="positivepercentage">Positive: {positivePercentage}%</p>;
};

export default CountPositiveFeedbackPercentage;
