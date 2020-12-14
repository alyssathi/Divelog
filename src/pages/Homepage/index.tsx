import React, { useState } from "react";
import Accordion from "./Accordion";
import { mockArr } from "./Accordion/mockArr";
import AddDiveSection from "./AddDiveSection";

interface DiveEntry {
  diveNumber: number;
  diveSite: string;
  date: string;
  depth: string;
  time: string;
  air: string;
  weights: string;
  visibility: string;
  temperature: string;
  activities: string;
  kindOfDive: string;
  notes: string;
}
export default function Homepage() {
  const [diveEntries, setDiveEntries] = useState<DiveEntry[]>(mockArr);
  const handleSave = (values: DiveEntry) => {
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
