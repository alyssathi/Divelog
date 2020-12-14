import { Button } from "@material-ui/core";
import React from "react";
import DialogComp from "../../../components/DialogComp";
import DiveForm from "../../../components/DiveForm";

export default function AddDiveSection({ onSave }) {
  return (
    <div>
      <DialogComp
        buttonText={"Add New Dive"}
        dialogTitle={"Add a New Dive"}
        dialogContent={<DiveForm />}
        addNewFunc={onSave}
        addNewText={"Save Dive"}
      />
    </div>
  );
}
