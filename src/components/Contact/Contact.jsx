import PropTypes from 'prop-types';

import { StyledContact } from './StyledContact';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Redux/actions';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  
  const handelDelete = () => dispatch(deleteContact(id));

  return (
    <StyledContact>
      <div>
        <div>
          <p>Name:</p>
          <span>{name}</span>
        </div>
        <div>
          <p>Number:</p>
          <span>{number}</span>
        </div>
      </div>

      <button type="button" onClick={handelDelete}>
        delete
      </button>
    </StyledContact>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
