import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useSelector } from "react-redux";
import './accord.css'

function AccordBstrap({ children }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <>
      {toggleState ? (
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Languages by population</Accordion.Header>
            <Accordion.Body>{children}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : null}
    </>
  );
}

export default AccordBstrap;
