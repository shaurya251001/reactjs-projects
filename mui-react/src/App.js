import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <div>
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<DeleteIcon />}
            onChange={() => {
              setChecked(!checked);
            }}
            color="primary"
          />
        </div>
      }
      label="Testing a checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          placeholder="test@test.com"
          label="Email"
        />
        <CheckBoxExample />

        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size="large"
            variant="contained"
            color="primary"
          >
            SAVE
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size="large"
            variant="contained"
            color="secondary"
          >
            DISCARD
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
