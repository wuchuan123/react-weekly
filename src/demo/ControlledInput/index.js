import React, {useState} from 'react'

const ControlledInput = ({value, onValueChange, ...rest}) => {
  return (
    <input value={value} onChange={({target: {value}}) => onValueChange(value)} {...rest}/>
  )
}

export default ControlledInput

//例子

const App = () => {
  const [value, setValue] = useState('')
  return (
    <ControlledInput value={value} onValueChange={setValue} type='text' placeholder='Insert some text here...'/>
  )
}
