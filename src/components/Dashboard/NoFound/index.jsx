import React from 'react'
import "./styles.css"

function Notfound({clearSearch}) {
  return (
    <div className='notfound-text'>
      <h1>Coins not found...</h1>
        <button onClick={()=>clearSearch()}>Clear</button>
    </div>
  )
}

export default Notfound
