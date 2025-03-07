import React from 'react';
import App from './App'
 export const Button = React.memo(({ handleClick }) => {
    console.log("Button rendered");
    return <button onClick={handleClick}>Click Me</button>;
  });
