import React from 'react';
import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
