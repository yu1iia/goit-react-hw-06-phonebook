import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.users}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.userInfo} key={id}>
          <p>
            {name} : {number}
          </p>
          <button
            className={s.removeContactButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.prototype = {
  onDeleteContact: PropTypes.func.isRequired,
};
