import React, { useState } from "react";
import { mockArr } from "./mockArr";
import AccordionEntry from "./AccordionEntry";

export default function AccordionComp() {
  const [diveEntries, setDiveEntries] = useState(mockArr);

  return (
    <div>
      {diveEntries.map((entry) => {
        return <AccordionEntry key={entry.diveNumber} {...entry} />;
      })}
    </div>
  );
}
