import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/button.scss';
import { getAllPeople } from './api/people';
import { UserList } from './components/UsersList/UsersList';

export const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (localStorage.people) {
      setPeople(JSON.parse(localStorage.getItem('people')));
    } else {
      getAllPeople()
        .then((peopleFromServer) => {
          const peopleWithComments = peopleFromServer.map(person => ({
            ...person, comments: [],
          }));

          setPeople(peopleWithComments);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const addComment = (commentText, userId) => {
    const newComment = {
      userId,
      id: +new Date(),
      body: commentText,
    };

    setPeople(prevPeople => prevPeople.map((person) => {
      if (person.url === userId) {
        return {
          ...person, comments: [...person.comments, newComment],
        };
      }

      return person;
    }));
  };

  const deleteComment = (userId, commentId) => {
    setPeople(prevPeople => prevPeople.map((person) => {
      if (person.url === userId) {
        const newComments = person.comments.filter(comment => comment.id !== commentId);

        return {
          ...person, comments: newComments,
        };
      }

      return person;
    }));
  };

  return (
    <div className="App">
      <main className="App__main">
        <UserList
          people={people}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      </main>
    </div>
  );
};
