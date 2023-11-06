import React from "react";
import './helmet.css'
const Helmet = (props) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100 home-page">{props.children}</div>;
};

export default Helmet;
