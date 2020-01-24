import React from 'react';
import List from './List';
import Form from './Form';

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
    </>);
};

export default App;