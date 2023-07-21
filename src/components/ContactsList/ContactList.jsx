import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'



const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({id = nanoid(), name, number}) => (
      <li key={id} className={css.item}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
        <button className={css.btn} onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
