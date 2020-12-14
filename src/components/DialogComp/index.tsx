import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

interface DialogProps<T> {
  buttonText: string;
  dialogTitle: string;
  dialogContent: any;
  addNewFunc: () => void;
  addNewText: string;
}

export default function DialogComp<T>(props: DialogProps<T>) {
  const {
    buttonText,
    dialogTitle,
    dialogContent,
    addNewFunc,
    addNewText,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveAndClose = () => {
    addNewFunc();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveAndClose} color="primary">
            {addNewText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
