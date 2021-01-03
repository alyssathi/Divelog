import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import AddDiveDialog from "../../../components/AddDiveDialog";
import { IDiveEntry } from "./../../../Models/IDiveEntry";
import AccordionGrid from "./AccordionGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

interface AccordionEntryProps {
  diveEntry: IDiveEntry;
  handleDelete: (id: number) => void;
  handleEditSave: (id: number, diveEntry: IDiveEntry) => void;
}

const handleSave = () => {};

export default function AccordionEntry(props: AccordionEntryProps) {
  const classes = useStyles();
  const { diveNumber, diveSite } = props.diveEntry;
  const { diveEntry, handleDelete, handleEditSave } = props;
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{diveNumber}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {diveSite}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionGrid {...props.diveEntry} />
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => handleDelete(diveNumber)}
          >
            Delete
          </Button>
          <AddDiveDialog
            openDialogButtonText="Edit"
            dialogTitle="Edit Dive"
            handleSave={handleSave}
            saveButtonText="Save"
            handleEditSave={handleEditSave}
            editValues={diveEntry}
          />
        </AccordionActions>
      </Accordion>
    </div>
  );
}
