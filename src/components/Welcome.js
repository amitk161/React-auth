import React from 'react'

function Welcome() {
    let loginData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      Hello {loginData[0]}. Welcome to your app.
    </div>
  )
}

export default Welcome
