import { message } from "antd";
import React, { useState } from "react";
const Option = ({ data, index }) => {
  const [selected, setSelected] = useState(false);
  const addDetails = (name) => {
    var showList = [];
    showList.push({ name });
    showList = showList.concat(
      JSON.parse(localStorage.getItem("data") || "[]")
    );
    console.log(showList);
    localStorage.setItem("data", JSON.stringify(showList));
  };

  if (selected) {
    message.success("you have selected this item", 1);
  }

  return (
    <>
      <p
        className="otions"
        key={index}
        style={{ color: selected ? "red" : "#689a39" }}
        onClick={() => {
          setSelected(!selected);
          addDetails(data.name);
        }}
      >
        {data.name}
      </p>
    </>
  );
};

export default Option;
