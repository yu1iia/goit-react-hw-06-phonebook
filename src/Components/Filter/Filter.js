import React from 'react';
import PropTypes from 'prop-types';

//styles
import s from './Filter.module.css';

const Filter = ({ onChange, value }) => (
  <label className={s.filter_label}>
    Filter
    <input
      className={s.filter_input}
      value={value}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={onChange}
    />
  </label>
);

Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
