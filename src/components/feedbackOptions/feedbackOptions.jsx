import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onButtonClick = feedbackKey => () => {
    onLeaveFeedback(feedbackKey);
  };

  return options.map(feedbackKey => {
    return (
      <button
        className={css.button}
        key={shortid.generate()}
        type="submit"
        onClick={onButtonClick(feedbackKey)}
      >
        {feedbackKey}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
