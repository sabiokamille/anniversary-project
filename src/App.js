import React, {useState} from 'react';
import './App.css';

// I took the code we did today and moved it to the HomePage. This way you'll have a decent example of how to break things out and/or create new pages. See below how to use them. Basically, you call use them like they're HTML elements.
import HomePage from './Components/HomePage/HomePage.js'
import Spring from './Components/Spring/Spring.js'

  // Using state, we can control where the person goes next on the website. React has React Hooks that do this easily! React hooks can only be used in functions, so the nifty classes I showed you earlier are almost obsolete :(

function App() {
  // A simple example of a hook is below. changePages is the variable we will use in the code and setChangePages is the function to change the value (state) of changePages
  const [changePages, setChangePages] = useState(0)

  return (
    // Everything must be inside a container. For example: Everything below is inside a <div> container. Any container works, Everything could be inside a <p> (paragraph) container or one big <h1>! The possibilities are endless!
    <div>
    {/* React doesn't really like if/else statements so a ternary operator is used instead. Basically, it looks like this:
    (Am I a thing) ? (Yes, Do this) : (No, Do this instead)
    For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    // Because we're using anything but a component, we need to put the code in {}. Any time you use a variable it needs to be in {}. Another example is if you pass a name to a component as a variable and want to show it on the page: Oof. Apparently you can't do that in comments because it still thinks it needs the variable. See below */}
    {
      // While the changePages state is zero, render the HomePage. If not, move on to Spring. We can also add multiple layers to this. For instance, show the Spring page when changePages is equal to 1, Summer when it's 2, and so on (example at the bottom). Later I'll show you how to set this so you don't have to keep adding pages. Gonna get real long if this thing is 100 pages lol
      (changePages === 0) ?
        // setChangePages is passed to the HomePage component so you can change the state from there.
        <HomePage setChangePages={setChangePages} /> :
        <Spring />
    }
    </div>
  )
}

export default App

// Variable Use:
// <h1>{name}</h1>


// Ternary example:
// (changePages === 0) ?
//   <HomePage setChangePages={setChangePages} /> :
// (changePages === 1) ?
//   <Spring setChangePages={setChangePages} /> :
// (changePages === 2) ?
//   <Summer setChangePages={setChangePages} /> :
// (changePages === 3) ?
//   <Fall  setChangePages={setChangePages} /> :
//    Winter will show if all the other checks fail
//   <Winter setChangePages={setChangePages} />
