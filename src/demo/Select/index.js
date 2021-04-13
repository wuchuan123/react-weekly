import React from 'react'

const Select=({values,selectedValue,onValueChange,...rest})=>{
  return(
    <select defaultValue={selectedValue} onChange={({target:{value}})=>onValueChange(value)} {...rest}>
      {values.map(([value,text])=>(
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}

export default Select

// Examples
// const choices = [
//   ['grapefruit', 'Grapefruit'],
//   ['lime', 'Lime'],
//   ['coconut', 'Coconut'],
//   ['mango', 'Mango'],
// ];
// ReactDOM.render(
//   <Select
//     values={choices}
//     selectedValue="lime"
//     onValueChange={val => console.log(val)}
//   />,
//   document.getElementById('root')
// );