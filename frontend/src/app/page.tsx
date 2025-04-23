import React from 'react';
import TodoList from '../components/TodoList';
// import ViewTwitter from '../components/ViewTwitter';
import Schedule from '../components/Schedule';

// Todoアプリの中身
const Home = () => {
    return (
        <div className="container mx-auto p-8 text-center max-w-2xl">
            <TodoList />
            {/* <ViewTwitter /> */}
            <Schedule />
        </div>
    );
};

export default Home;