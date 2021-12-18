import React, { useState } from "react";
import "../../styles/pages/resources/Resources.css";

function Resources() {
  const [seed, setSeed] = useState("123");
  const [size, setSize] = useState("100");
  const code =
    "<img style={{ width: `${size}px` }} src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />";

  const onSeedChange = (e) => {
    setSeed(e.target.value);
  };
  const onSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="resources">
      <h2>
        Here I have tried to collect all useful resources that I have come
        acroos.{" "}
      </h2>{" "}
      <h3 className="resource--heading"> 1. How to get random image avatar </h3>{" "}
      <div className="resource">
        <div className="resource--code">
          <h2> Code </h2>{" "}
          <form>
            <h4> Value of Seed </h4>{" "}
            <input
              type="text"
              value={seed}
              onChange={(e) => {
                onSeedChange(e);
              }}
            />{" "}
            <h4> Value of Size </h4>{" "}
            <input
              ṅtype="text"
              value={size}
              onChange={(e) => {
                onSizeChange(e);
              }}
            />{" "}
          </form>{" "}
          <p> {code} </p>{" "}
        </div>{" "}
        <div className="resource--output">
          <img
            style={{ width: `${size}px` }}
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />{" "}
        </div>{" "}
      </div>{" "}
      <h3 className="resource--heading"> 2. How to </h3>{" "}
    </div>
  );
}

export default Resources;
