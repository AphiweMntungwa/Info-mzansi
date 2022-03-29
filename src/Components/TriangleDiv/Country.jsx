import React from "react";

function Country({config}) {
  const {name, label, population} = config;
  return (
    <div>
      <table className="header-table">
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{label}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{population}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Country;
