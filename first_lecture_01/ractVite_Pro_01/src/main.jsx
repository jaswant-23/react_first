import { StrictMode } from "react"; /* here react is core foundtion library that help to make the ui*/
import { createRoot } from "react-dom/client"; /* here react-dom help to render the ui on the browser it is package that implmented for the web platform like react-native for mobile platform.*/
// import './index.css'
import App from "./App.jsx";
 import React from "react";

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>  {/* // here StrictMode is a component that help to find the error and problem in the app and give you the warning and also help to find the deprecated code that no longer use in the future version of react. */}
//     <App />
//     // {/* // here we call the app component that we created in app.jsx file and then render to the index.html file. Here react give you oppurtunity to make your own tag that direct render and see on th UI*/}
//   // </StrictMode>,
// )

const CreateCustomElement = (
  <a href="https:/jaswant.bio.link" target="_blank" rel="noreferrer">
    jaswant Bio link
  </a>
);
// This is the wey to create the custom element in react but it will not work because it is not a method or component of react so we have to make it a component of react by making function that return this element.
// these is the real format that react follow to create the element in react.

const createEle_React = React.createElement(
  "a",
  {
    href: "https:/jaswant.bio.link",
    target: "_blank",
    rel: "noreferrer",
  },
  "Jaswant Bio link using React.createElement method"
); 

const root = createRoot(document.getElementById("root")); // here we create the root that help to render the ui on the browser and get the element by id that is root that we created in index.html file.
root.render(
  //  <CreateCustomElement />// here we try to render our custome element , but it will not work because it is not a method or component of react so we have to make it a component of react by making function that return this element.
  //  CreateCustomElement  // it works
  createEle_React   // but it not show

  // <App />
);
