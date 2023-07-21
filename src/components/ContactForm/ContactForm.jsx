
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css";


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
    
  nameInput = nanoid();
  phoneInput = nanoid();
    
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    };
    
     handleSubmit = (e) => {
        e.preventDefault();

         this.props.onSubmit(this.state); 
         this.reset();
  }

    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
  render() {
    return (
      <div className={css.formContainer}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInput}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={this.nameInput}
              required
            />
          </label>
          <label htmlFor={this.phoneInput}>
            Phone
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={this.phoneInput}
              required
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};