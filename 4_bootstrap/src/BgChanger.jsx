import React, { useState } from 'react'

function BgChanger() {
  let [theme, setTheme] = useState('#555');
  const changeBGColor = (e) => {
      setTheme(e.target.value);
  }
  return (
    <>
        <div className='container' style={{backgroundColor: theme, width: "50%"}}>
            <h1>Change the background color</h1>
            <input type='color' onChange={changeBGColor}/>
        </div>
    </>
  )
}

export default BgChanger