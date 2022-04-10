import React from "react";
import "./otherdet.css";

function OtherDetails({ paragraph }) {
  return (
    <div>
      <p className="country-paragraph">
        {paragraph}{" "}
        <a href="https://en.wikipedia.org/wiki/South_Africa">
           ..wiki
        </a>
      </p>
    </div>
  );
}

export default OtherDetails;
