import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './demo/TagInput/index';
// import App from './demo/MultiselectCheckbox/index';
// import App from './demo/LimitedWordTextarea/index';
// import Modal from './demo/Modal/index'
// import { Tabs } from "./demo/Tabs/index";
// import Tables from './ant/table'

// import App from './hooks/callback/index';
// import {AccordionItem,Accordion} from "./demo/Accordion/index"
// import TreeView from "./demo/TreeView/index";
import Alert from "./demo/Alert/index"



ReactDOM.render(
  <React.StrictMode>
    <Alert type="info" message="This is info" timeout={1000000000} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
