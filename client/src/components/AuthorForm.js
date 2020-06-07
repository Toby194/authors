import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function AuthorForm({author, method, url, backUrl}) {
    const [name, setName] = useState(author.name);
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

        axios[method](url, {
            name
        })
            .then(() => navigate('/authors'))
            .catch(err => {
                const errors = [];
                    const innerErrorsObject = err.res.data.errors;
                    for(const key in innerErrorsObject) {
                        errors.push(innerErrorsObject[key].message);
                    }
                    setErrors(errors);
                    
            })
    }
    return (
        <div>
            <Link to="/authors">Home</Link>
            <p></p>
            <br/>
            {errors.map(err => (
                <p style={{ color: 'red' }}>{err}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <label>Name</label>

                <input 
                    name="name"
                    value={author.name}
                    onChange={e => setName(e.target.value)}/>
                    <button>Submit</button>
                    <button type="button" onClick={() => navigate(backUrl)}>Cancel</button>
            </form>
        </div>
    )
}