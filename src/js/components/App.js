import React from 'react';
import List from './List';
import Form from './Form';
import Post from './Post';

const App = () => {
    return (
    <>
    <div>
        <h2>Articles</h2>
        <List />
    </div>
    <div>
        <h2>Add Article</h2>
        <Form />
    </div>
    <div>
        <h2>Remote Articles</h2>
        <Post />
    </div>
    </>);
};

export default App;