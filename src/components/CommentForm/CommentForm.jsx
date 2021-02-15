import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentForm.scss';

export const CommentForm = ({ userId, addComment }) => {
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (commentText.trim()) {
      addComment(commentText, userId);
      setCommentText('');
    } else {
      setError(true);
    }
  }

  return (
    <form
      className="CommentForm"
      onSubmit={handleSubmit}
    >
      {error && (
        <p className="CommentForm__error">Fill out the filds </p>
      )}
      <div>
        <textarea
          name="body"
          placeholder="Type comment here"
          className="CommentForm__input"
          value={commentText}
          onChange={(event) => {
            setCommentText(event.target.value);
            setError(false);
          }}
        />
      </div>
      <button
        type="submit"
        className="CommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  userId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};
