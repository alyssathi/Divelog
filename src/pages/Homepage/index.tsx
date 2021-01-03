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
    setDiveEntries(newList);
  };

  const handleEditSave = (id: number, diveEntry: IDiveEntry) => {
    const diveEntriesCopy = [...diveEntries];
    const index = diveEntriesCopy.findIndex((entry) => entry.diveNumber === id);
    diveEntriesCopy[index] = diveEntry;
    setDiveEntries(diveEntriesCopy);
    console.log("dive entry copy", diveEntriesCopy);
    console.log("dive entry: ", diveEntry);
  };

  return (
    <div>
      <AddDiveSection onSave={handleSave} />
      <Accordion
        diveEntries={diveEntries}
        handleDelete={handleDelete}
        handleEditSave={handleEditSave}
      />
    </div>
  );
}
