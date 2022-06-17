import React from 'react';

function Home(props) {
    return (
        <div>
            Hello! It's Home 
            {props.newUser ? " Welcome aboard " : " Welcome back "}
            {props.name}

        
        </div>
    );
}

export default Home;