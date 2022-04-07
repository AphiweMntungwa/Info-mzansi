import React from "react";
import "./otherdet.css";

function OtherDetails({ paragraph }) {
  return (
    <div>
      <p className="country-paragraph">
        {paragraph}{" "}
        <a href="https://en.wikipedia.org/wiki/South_Africa">
          <box-icon name="link"></box-icon> ..wiki
        </a>
      </p>
    </div>
  );
}

export default OtherDetails;
