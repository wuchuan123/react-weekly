import React, {useState} from 'react'

const PasswordRevealer = ({defaultValue}) => {
  const [show, setShow] = useState(true)
  return (
    <>
      <input type={show ? 'password' : 'text'} defaultValue={defaultValue}/>
      <button onClick={()=>setShow(!show)}>Show/Hide</button>
    </>
  )

}
export default PasswordRevealer
// Examples
// ReactDOM.render(<PasswordRevealer />, document.getElementById('root'));