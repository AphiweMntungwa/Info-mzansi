import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleBurger } from "../../../../app/redux/topbar/topbarActions";

function DropList({ dropProps }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {dropProps.map((el) => (
        <Link
          to={{ pathname: el.link }}
          key={el.name}
          style={{ textDecoration: "none" }}
        >
          <li onClick={() => dispatch(toggleBurger())}>{el.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default DropList;
