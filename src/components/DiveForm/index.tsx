import { Button } from "@material-ui/core";
import React from "react";
interface DiveFormProps {
  onSave: (values: any) => void;
}

export function DiveForm(props: DiveFormProps) {
  const { onSave } = props;
  const saveDive = () => {
    onSave({});
  };

  return (
    <div>
      <Button onClick={saveDive}>Save</Button>
    </div>
  );
}
