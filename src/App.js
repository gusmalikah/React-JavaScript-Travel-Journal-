import React from "react"
import Nav from "./Components/nav"
import Places from "./Components/Places"
import Data from "./data"
import "./App.css"


function App() {
  const place = Data.map(item =>{
    return <Places 
      item={item} 
      />
  })
  return (
    <div>
      <Nav />
      <div className="places-container">
      {place}
      </div>
      </div>
  )
}

export default App
