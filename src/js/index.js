//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
import ContactCard from "./component/ContactCard.jsx";

//render your react application
ReactDOM.render(<ContactCard />, document.querySelector("#app"));
