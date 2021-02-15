import PropTypes from 'prop-types';

export const TypeComments = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired);

export const TypePerson = PropTypes.shape({
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  comments: TypeComments.isRequired,
});
