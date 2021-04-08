import React, {useState} from 'react';
import './App.css';

import HomePage from './Components/HomePage/HomePage.js'
import Spring from './Components/Spring/Spring.js'

// React Hook "useState" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function

function App() {
  // Using state, we can control where the person goes next on the website. A simple example is below. We set the state to zero and render the HomePage
  const [changePages, setChangePages] = useState(0)

  return (
    // Everything must be inside a container. For example: Everything below is inside a <div></div> container
    <div>
    {
      // React doesn't really like if/else statements so a ternary operator is used instead. For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

      // While the changePages state is zero, render the HomePage. If not, move on to Spring. setChangePages is passed to the HomePage component so you can change the state from there.
      (changePages === 0) ?
        <HomePage setChangePages={setChangePages} /> :
        <Spring />
    }
    </div>
  )
}

export default App
