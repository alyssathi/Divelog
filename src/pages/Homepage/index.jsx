import React, { useState } from "react";
import Accordion from "./Accordion";
import { mockArr } from "./Accordion/mockArr";
import AddDiveSection from "./AddDiveSection";

export default function Homepage() {
  const [diveEntries, setDiveEntries] = useState(mockArr);
  const handleSave = (values) => {
    const newEntries = [...diveEntries, values];
    setDiveEntries(newEntries);
  };

  return (
    <div>
      <AddDiveSection onSave={handleSave} />
      <Accordion diveEntries={diveEntries} />
    </div>
  );
}
