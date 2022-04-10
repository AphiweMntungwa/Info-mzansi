import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";
import "./accord.css";

function AccordBstrap({ children, config }) {
  const toggleState = useSelector((state) => state.topbar.toggler);

  return (
    <>
      {toggleState ? (
        <Accordion>
          {config.map((el, i) => (
            <Accordion.Item key={el} eventKey={i}>
              <Accordion.Header>{el}</Accordion.Header>
              <Accordion.Body>{children}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : null}
    </>
  );
}

export default AccordBstrap;
