import React from 'react';
import './App.css';
import picture from './images/picture.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Happy Anniversary! </h1>
        <h3 class="obama"> Header 2 </h3>
        <h1 id="rob"> New Header </h1>
        <img src={picture} alt="picture" class="App-logo"/>
      </div>
    )
  }
}

export default App
