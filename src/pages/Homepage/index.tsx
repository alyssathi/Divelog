import React, { useState } from "react";
import Accordion from "./Accordion";
import { mockArr } from "./Accordion/mockArr";
import AddDiveSection from "./AddDiveSection";
import { IDiveEntry } from "../../Models/IDiveEntry";

export default function Homepage() {
  const [diveEntries, setDiveEntries] = useState<IDiveEntry[]>(mockArr);
  const handleSave = (values: IDiveEntry) => {
    const newEntries = [...diveEntries, values];
    setDiveEntries(newEntries);
  };

  const handleDelete = (id: number) => {
    const newList = diveEntries.filter((entry) => entry.diveNumber !== id);
    console.log(id);
    setDiveEntries(newList);
  };

  return (
    <div>
      <AddDiveSection onSave={handleSave} />
      <Accordion diveEntries={diveEntries} handleDelete={handleDelete} />
    </div>
  );
}
