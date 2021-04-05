import React from 'react'

const MyComponent = ({enabled}) => {
  return (<div className={enabled ? 'enabled' : ''}> Hi </div>)
}

const OtherComponent = ({enabled}) => {
  return (<div className={enabled ? 'enabled' : null}> Hi </div>)
}

export {MyComponent, OtherComponent}

// ReactDOM.render(
//   <>
//     <MyComponent enabled={false} />
//     <OtherComponent enabled={false} />
//   </>,
//   document.getElementById('root')
// );