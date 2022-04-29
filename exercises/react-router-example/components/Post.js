import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Post () {
    const { id } = useParams();
    return (
        <>
            <h2>Now showing post {id}</h2>
            <Link to="/">Back</Link>
        </>
    );
}

export default Post;
