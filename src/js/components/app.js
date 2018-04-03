import React from 'react';
import List from './list';
import Form from './form';

const App = () => (
    <div className="grid-container">
        <div className="grid-column">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="grid-column">
            <Form />
        </div>
    </div>
);
export default App;