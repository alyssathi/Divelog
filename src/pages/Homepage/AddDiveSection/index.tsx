import React from "react";
import AddDiveDialog from "../../../components/AddDiveDialog";
import { IDiveEntry } from "./../../../Models/IDiveEntry";

interface AddDiveSectionProps {
  onSave: (values: IDiveEntry) => void;
}

export default function AddDiveSection(props: AddDiveSectionProps) {
  const { onSave } = props;
  return (
    <div>
      <AddDiveDialog
        buttonText={"Add New Dive"}
        dialogTitle={"Add a New Dive"}
        handleNewEntry={onSave}
        addNewText={"Save Dive"}
      />
    </div>
  );
}
