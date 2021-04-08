import React from 'react';
import picture from '../../images/picture.png'

// The setChangePages is passed in as a prop. The "props" below is basically gathering everything you send to it. This makes it easy so you only have to change what you pass in one location (on the App page).
function HomePage(props) {
  // Then we create a variable for each prop we need. Make sure the name you set on the App page matches what you set below! Keeping everything the same name is the safest and easiest bet.
  const { setChangePages } = props

  return (
    <div>
      <h1> Happy Anniversary! </h1>
      <h3 class="obama"> Header 2 </h3>
      <h1 id="rob"> New Header </h1>
      {/* WARNING: Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop */}
      <img src={picture} alt="your-face-is-redundant" class="App-logo"/>
      {/* This button uses an onClick event to change the state of setChangePages. The onClick needs a function but we don't have to create a function. In the example below "()=>" is the function. */}
      <button onClick={()=>setChangePages(1)}>It's Spring!</button>
    </div>
  )
}

export default HomePage
