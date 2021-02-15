import React from 'react';
import PropTypes from 'prop-types';
import { TypeComments } from '../../types';
import './CommentDetails.scss';

export const CommentDetails = ({ person, deleteComment }) => (
  <ul className="CommentDetails__list">
    {person.comments.map(comment => (
      <li
        className="CommentDetails__list-item"
        key={comment.id}
      >
        <button
          type="button"
          className="CommentDetails__remove-button button"
          onClick={() => deleteComment(person.url, comment.id)}
        >
          X
        </button>
        <p>{comment.body}</p>
      </li>
    ))}
  </ul>
);

CommentDetails.propTypes = {
  person: PropTypes.shape({
    url: PropTypes.string.isRequired,
    comments: TypeComments.isRequired,
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
};
