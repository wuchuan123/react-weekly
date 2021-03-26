import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './demo/TagInput/index';
// import App from './demo/MultiselectCheckbox/index';
// import App from './demo/LimitedWordTextarea/index';
// import Modal from './demo/Modal/index'
import { TabItem, Tabs } from "./demo/Tabs/index";

// import App from './hooks/callback/index';

ReactDOM.render(
  <React.StrictMode>
    <Tabs defaultIndex="1" onTabClick={console.log}>
      <TabItem label="A" index="1">
        Lorem ipsum
      </TabItem>
      <TabItem label="B" index="2">
        Dolor sit amet
      </TabItem>
    </Tabs>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
