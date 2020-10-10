import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import ButtonGroup from "@material-ui/core/ButtonGroup"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
        <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="primary">
          SAVE
        </Button>
        <Button startIcon={<DeleteIcon/>} size="large" variant="contained" color="secondary">
          DISCARD
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
