import React from "react";
import AccordionEntry from "./AccordionEntry";

export default function Accordion({ diveEntries }) {
  return (
    <div>
      {diveEntries.map((entry) => {
        return <AccordionEntry key={entry.diveNumber} {...entry} />;
      })}
    </div>
  );
}
