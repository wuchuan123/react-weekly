import React from 'react'

const MultiselectCheckbox = ({ options, onChange }) => {
 const [data,setData]=React.useState(options)
  const toggle=(index)=>{
   const newData=[...data]
    newData.splice(index,1,{
      label:data[index].label,
      checked:!data[index].checked
    })
    setData(newData)
    onChange(newData.filter(x=>x.checked))
  }

  return(
    <>
    {data.map((item,index)=>(
      <label key={item.label}>
       <input type="checkbox"  readOnly  onClick={()=>toggle(index)} checked={item.checked||false} />
        {item.label}
      </label>
    ))}
    </>
  )
};
export default MultiselectCheckbox