import React from "react";
import './otherdet.css'

function OtherDetails({paragraph}) {
  return (
    <div>
      <p className="country-paragraph">
        {paragraph}
      </p>
    </div>
  );
}

export default OtherDetails;
