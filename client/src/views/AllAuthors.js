import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function AllAuthors() {
  const [authors, setAuthors] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/authors')
      .then((res) => setAuthors(res.data))
      .catch(() => setHasErrors(true));
  }, []);

  function handleDelete(id) {
    axios
      .delete('http://localhost:8000/api/authors/' + id)
      .then(() => setAuthors(authors.filter((author) => author._id !== id)));
  }
  if (hasErrors) return 'Texas we have a problem!';

  if (authors == null) return 'Loading ...';

  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to="/authors/new">Add an author</Link>
      <h3>We have quotes by:</h3>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Action available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <button onClick={() => handleDelete(author._id)}>Delete</button>
                <button
                  onClick={() => navigate('/authors/' + author._id + '/edit')}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
