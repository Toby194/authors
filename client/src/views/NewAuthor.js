import React from 'react';

import AuthorForm from '../components/AuthorForm';

export default function NewAuthor() {
  const newAuthor = {
    name: '',
  };

  return (
    <div>
      <h1>Add new author:</h1>
      <br />
      <div>
        <AuthorForm
          author={newAuthor}
          method="post"
          url="http://localhost:8000/api/authors"
          backurl="authors"
        />
      </div>
    </div>
  );
}
