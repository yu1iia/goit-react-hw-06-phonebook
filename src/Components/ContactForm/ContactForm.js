import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import s from './ContactForm.module.css';

//npm
import shortid from 'shortid';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      name: name,
      number: number,
      id: shortid.generate(),
    };
    this.props.submitHandler(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label className={s.form_label}>
          Name
          <input
            className={s.form_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.form_label}>
          Number
          <input
            className={s.form_input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.addButton}>Add contacts</button>
      </form>
    );
  }
}

// eslint-disable-next-line react/no-typos
ContactForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
