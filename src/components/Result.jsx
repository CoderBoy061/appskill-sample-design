import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Result = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("data")));
  }, []);
  return (
    <div>
      {data.length !== 0 ? (
        <div>
          <p>You have selected those</p>
          {data.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Result;
