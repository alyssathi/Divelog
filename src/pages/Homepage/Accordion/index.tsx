import React from "react";
import AccordionEntry from "./AccordionEntry";
import { IDiveEntry } from "./../../../Models/IDiveEntry";

interface AccordionProps {
  diveEntries: IDiveEntry[];
  handleDelete: (id: number) => void;
}

export default function Accordion(props: AccordionProps) {
  const { diveEntries, handleDelete } = props;

  return (
    <div>
      {diveEntries.map((entry) => {
        return <AccordionEntry diveEntry={entry} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
