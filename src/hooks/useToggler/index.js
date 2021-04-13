import React, {useState, useCallback} from 'react'

const useToggler = initialState => {
  const [value, setValue] = useState(initialState)
  const toggleValue = useCallback(() => setValue(prev=>!prev), [])
  return [value, toggleValue]
}

export default useToggler

// 例子：
// const Switch = () => {
//   const [val, toggleVal] = useToggler(false);
//   return <button onClick={toggleVal}>{val ? 'ON' : 'OFF'}</button>;
// };
// ReactDOM.render(<Switch />, document.getElementById('root'));