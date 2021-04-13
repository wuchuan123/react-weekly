import React from 'react'
import './index.css'
const TabItem = props => {
  debugger
  return(
    <div {...props} />
  )
};

const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);
  const changeTab = newIndex => {
    if (typeof onTabClick === 'function') onTabClick(defaultIndex);
    setBindIndex(newIndex);
  };
  const items = children.filter(item => item.type.name === 'TabItem');

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? 'focus' : ''}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {items.map(({ props }) => (
          <div
            {...props}
            className={`tab-content ${
              bindIndex === props.index ? 'selected' : ''
            }`}
            key={`tab-content-${props.index}`}
          />
        ))}
      </div>
    </div>
  );
};


export {TabItem,Tabs}