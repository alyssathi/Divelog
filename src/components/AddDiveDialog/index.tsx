import {
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import clsx from "clsx";
import React from "react";
import { IDiveEntry } from "../../Models/IDiveEntry";

interface DialogProps {
  openDialogButtonText: string;
  dialogTitle: string;
  handleSave: (value: IDiveEntry) => void;
  saveButtonText: string;
  editValues?: IDiveEntry;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

export default function AddDiveDialog(props: DialogProps) {
  const classes = useStyles();
  const {
    openDialogButtonText: buttonText,
    dialogTitle,
    handleSave,
    saveButtonText: addNewText,
    editValues,
  } = props;

  const [open, setOpen] = React.useState(false);

  const initValues: Partial<IDiveEntry> = {
    diveNumber: 0,
    diveSite: "",
    date: "",
    depth: 0,
    time: "",
    air: 0,
    weights: 0,
    visibility: 0,
    temperature: 0,
    activities: "",
    kindOfDive: "",
    notes: "",
  };

  const [values, setValues] = React.useState(
    editValues ? editValues : initValues
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveAndClose = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSave(values as IDiveEntry);
    setOpen(false);
    setValues(initValues);
  };

  const handleChange = (prop: keyof IDiveEntry) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
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
        <DialogContent>
          <form onSubmit={handleSaveAndClose}>
            <TextField
              required
              label="Dive Number"
              value={values.diveNumber}
              onChange={handleChange("diveNumber")}
              id="dive-number"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Dive Site"
              value={values.diveSite}
              onChange={handleChange("diveSite")}
              id="dive-site"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Date"
              value={values.date}
              onChange={handleChange("date")}
              id="date"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Time Under"
              value={values.time}
              onChange={handleChange("time")}
              id="time-under"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Air Left"
              id="air-left"
              value={values.air}
              onChange={handleChange("air")}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">psi</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              required
              label="Depth"
              id="depth"
              value={values.depth}
              onChange={handleChange("depth")}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">m</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              required
              label="Visibility"
              id="visibility"
              value={values.visibility}
              onChange={handleChange("visibility")}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">m</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              required
              label="Weights"
              id="weights"
              value={values.weights}
              onChange={handleChange("weights")}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              required
              label="Temperature"
              id="temperature"
              value={values.temperature}
              onChange={handleChange("temperature")}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">C</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              required
              label="Dive Activities"
              value={values.activities}
              onChange={handleChange("activities")}
              id="activities"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Kind of Dive?"
              value={values.kindOfDive}
              onChange={handleChange("kindOfDive")}
              id="kind-of-dive"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <TextField
              required
              label="Notes"
              value={values.notes}
              onChange={handleChange("notes")}
              id="notes"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {addNewText}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
