import { Button } from "@material-ui/core";
import React from "react";

export default function AddDiveSection({ onSave }) {
  return (
    <div>
      <Button onClick={onSave}>Add New</Button>
    </div>
  );
}
