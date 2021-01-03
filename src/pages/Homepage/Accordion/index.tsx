import React from "react";
import AccordionEntry from "./AccordionEntry";
import { IDiveEntry } from "./../../../Models/IDiveEntry";

interface AccordionProps {
  diveEntries: IDiveEntry[];
  handleDelete: (id: number) => void;
  handleEditSave: (id: number, diveEntry: IDiveEntry) => void;
}

export default function Accordion(props: AccordionProps) {
  const { diveEntries, handleDelete, handleEditSave } = props;

  return (
    <div>
      {diveEntries.map((entry) => {
        return (
          <AccordionEntry
            diveEntry={entry}
            handleDelete={handleDelete}
            handleEditSave={handleEditSave}
          />
        );
      })}
    </div>
  );
}
