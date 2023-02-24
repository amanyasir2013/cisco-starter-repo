import React from "react";
import "./infoBox.css";

const InfoCard = (props) => {
  const { header, lines } = props;

  const lineElements = lines.map((line, i) => (
    <p key={i} style={{ color: line.color }}>
      {line.text} {line.data}
    </p>
  ));

  return (
    <div className="box">
      <h4>{header}</h4>
      <div className="top-border" />
      {lineElements}
    </div>
  );
};

export default InfoCard;