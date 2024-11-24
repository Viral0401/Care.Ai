import React from "react";

const Items = (props) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">{props.name}</h1>
      <h1 className=" font-bold text-lg">
        <span className="text-3xl">{props.value}</span> / {props.maxValue}
      </h1>
    </div>
  );
};

export default Items;
