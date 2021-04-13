import React from 'react'
import './index.css'


const Toggle =({defaultToggled=false})=>{
  const [isToggleOn,setIsToggleOn]=React.useState(defaultToggled)
  return(
    <label className={`toggle ${isToggleOn?'on':'off'}`}>
      <input type='checkbox' checked={isToggleOn} onChange={() => setIsToggleOn(!isToggleOn)} />
      {isToggleOn?'ON':'OFF'}
    </label>
  )
}


export default Toggle
// Examples
// ReactDOM.render(<Toggle />, document.getElementById('root'));