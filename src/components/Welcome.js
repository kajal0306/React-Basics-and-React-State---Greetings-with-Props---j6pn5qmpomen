import React from 'react';

const Welcome = ({name}) => {
    let introDuction = `Hey ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{introDuction}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome;
