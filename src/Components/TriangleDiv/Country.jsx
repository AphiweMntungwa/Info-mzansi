import React from "react";

function Country({config}) {
  const {name, population} = config;
  return (
    <div>
      <table className="header-table">
        <tbody>
          <tr>
            <td>{name}</td>
            <td> Country</td>
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
