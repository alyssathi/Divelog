import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import React from "react";

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

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function DiveForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        />
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}

// import { Button } from "@material-ui/core";
// import React from "react";

// interface DiveFormProps {
//   onSave: (values: any) => void;
// }

// export function DiveForm(props: DiveFormProps) {
//   const { onSave } = props;
//   const saveDive = () => {
//     onSave({});
//   };

//   return (
//     <div>
//       <Button onClick={saveDive}>Save</Button>
//     </div>
//   );
// }
