import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AuthorForm from '../components/AuthorForm';

export default function EditAuthor({id}) {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data)
                setIsLoading(false);
            })
            .catch(console.log);
    }, [id]);

    if(isLoading == null) return 'Loading...';

    return (
        <div>
            <p></p>
            <p>
                Edit this Author
            </p>
            <AuthorForm
                author={name}
                method="put"
                url={"http:localhost:8000/api/authors" + id}
                backUrl={"/authors/" + id}
            />
        </div>
    )
}