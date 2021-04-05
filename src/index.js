import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import App from './demo/TagInput/index';
// import App from './demo/MultiselectCheckbox/index';
// import App from './demo/LimitedWordTextarea/index';
// import Modal from './demo/Modal/index'
// import { TabItem, Tabs } from "./demo/Tabs/index";
// import RippleButton  from "./demo/RippleButton/index";
// import TextArea  from "./demo/TextArea/index";
// import {MyComponent, OtherComponent}  from "./demo/ClassName/index";
// import Mailto  from "./demo/Mailto/index";
// import PasswordRevealer  from "./demo/PasswordRevealer/index";
// import Select from './demo/Select/index'
// import Toggle from './demo/Toggle/index'
// import LimitedTextarea from './demo/LimitedTextarea/index'

// import App from './hooks/callback/index';
// import useToggler from './hooks/useToggler/index';
// import usePrevious from './hooks/usePrevious/index'
import useInterval from './hooks/useInterval/index'

const Timer=props=>{
  const [seconds,setSeconds]=React.useState(0)
  useInterval(()=>{
    setSeconds(seconds+1)
  },1000)
  return(
    <p>{seconds}</p>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Timer/>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
