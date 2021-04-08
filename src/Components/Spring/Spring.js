import React from 'react';
import picture from '../../images/picture.png'

class Spring extends React.Component {
  render() {
    return (
      <div>
        <h1> Happy Anniversary! </h1>
        <h3 class="obama"> I'M DIFFERENT </h3>
        <h1 id="rob"> Spring is cool until the sneezing fits start </h1>
        <img src={picture} alt="your-face-is-redundant" class="App-logo"/>
      </div>
    )
  }
}

export default Spring
