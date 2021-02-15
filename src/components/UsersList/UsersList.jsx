import React from 'react';
import PropTypes from 'prop-types';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentDetails } from '../CommentDetails/CommentDetails';
import { TypePerson } from '../../types';
import './UsersList.scss';

export const UserList = ({ people, addComment, deleteComment }) => (
  <div className="UsersList">
    <h2>Users:</h2>
    <ul className="UsersList__list">
      {people.map((person) => {
        const { url, name, birth_year, comments } = person;

        return (
          <li className="UsersList__item" key={url}>
            <div className="UsersList__title">
              <h3>
                {name}
              </h3>
              <p>
                (
                {birth_year}
                {' '}
                year of birth)
              </p>
            </div>

            <div className="UsersList__content">
              <h3>Leave comment</h3>
              <CommentForm
                userId={url}
                addComment={addComment}
              />

              {comments.length > 0 && (
                <div className="CommentDetails">
                  <h3>Comments:</h3>
                  <CommentDetails
                    person={person}
                    deleteComment={deleteComment}
                  />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

UserList.propTypes = {
  people: PropTypes.arrayOf(TypePerson.isRequired).isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
