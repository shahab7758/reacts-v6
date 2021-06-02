import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'




const App = () => {
  return (
    <div>
      <h1>
        Adopt Me!
      </h1>
      <Pet name="Luna"
        animal="Dog"
        breed="Havanese" />
      <Pet name="Pepper"
        animal="Bird"
        breed="Cocktiel" />
      <Pet name="Sudo"
        animal="Dog"
        breed="Wheaten Terrier" />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
