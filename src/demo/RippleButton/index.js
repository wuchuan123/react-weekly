import React from 'react'
import './index.css'

const RippleButton = ({ children, onClick }) => {

 return(
   <>
    <button className='ripple-button' onClick={(e)=>{
      {e.clientX}
    }}>
      <span className='ripple' />
      <span className='content'>{children}</span>
    </button>
   </>
 )
};
export default RippleButton
// Examples
// ReactDOM.render(
//   <RippleButton onClick={e => console.log(e)}>Click me</RippleButton>,
//   document.getElementById('root')
// );
