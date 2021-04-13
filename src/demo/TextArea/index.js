import React from 'react'

const TextArea = ({rows = 2, cols = 20, defaultValue, onValueChange, ...rest}) => {
  return (
    <textarea rows={rows} cols={cols} defaultValue={defaultValue}
              onChange={({target: {value}}) => onValueChange(value)} {...rest}/>
  )
}

export  default  TextArea
// 例子
// ReactDOM.render(
//   <TextArea
//     placeholder="Insert some text here..."
//     onValueChange={val => console.log(val)}
//   />,
//   document.getElementById('root')
// );