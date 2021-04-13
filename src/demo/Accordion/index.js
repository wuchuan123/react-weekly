import React from "react";
import "./index.css";

const AccordionItem = ({ label, isCollapsed, handleClick, children }) => {
  return (
    <>
      <button onClick={handleClick} className='accordion-button'>{label}</button>
      <div
        className={`accordion-item ${isCollapsed ? "collapsed" : "expanded"}`}
      >
        {children}
      </div>
    </>
  );
};

const Accordion = ({ defaultIndex, onItemClick, children }) => {
  const [bindIndex,setBindIndex]=React.useState(defaultIndex)
  const changItem=itemIndex=>{
    if(typeof onItemClick==='function') onItemClick(itemIndex)
    if(itemIndex!==bindIndex) setBindIndex(itemIndex)
  }
  const items=children.filter((item)=>item.type.name==='AccordionItem')
  return(
    <>
    {items.map(({props})=>(
      <AccordionItem
      children={props.children}
      handleClick={()=>changItem(props.index)}
      isCollapsed={bindIndex!==props.index}
      label={props.label}
      />
    ))}
    </>
  )
};

export { AccordionItem, Accordion };
// Examples
// ReactDOM.render(
//   <Accordion defaultIndex="1" onItemClick={console.log}>
//     <AccordionItem label="A" index="1">
//       Lorem ipsum
//     </AccordionItem>
//     <AccordionItem label="B" index="2">
//       Dolor sit amet
//     </AccordionItem>
//   </Accordion>,
//   document.getElementById('root')
// );
