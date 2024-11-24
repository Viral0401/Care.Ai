import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Helpline.css"; // A CSS file to style the component

// Data for helpline numbers could be an array of objects
const helplineData = [
  {
    name: "TeleManas",
    description: "Mental health care through 24X7 tele-mental health services",
    number: "14416",
  },
  {
    name: "Connecting Trust",
    description: "Suicide Prevention and mental health concerns.",
    number: "+91 9922004305",
  },
  {
    name: "iCall",
    description: "Psychological and mental health Helpline Kiran 24/7",
    number: "+91 18005990019",
  },
  {
    name: "Vandrevala Foundation",
    description:
      "Suicide prevention, depression, and other mental health concern.",
    number: "+91 9999666555",
  },
];

const HelplineComponent = ({ onClose }) => {
  return (
    <div className="helpline-container">
      <div className="helpline-header">
        <h2>Emergency Helpline Number</h2>
        <Link to="/patients"></Link>
      </div>
      <ul className="helpline-list">
        {helplineData.map((helpline, index) => (
          <li key={index} className="helpline-item">
            <div className="helpline-info">
              <h3>{helpline.name}</h3>
              <p>{helpline.description}</p>
            </div>
            <div className="helpline-number">
              <a href={`tel:${helpline.number}`}>{helpline.number}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelplineComponent;
