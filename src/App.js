import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = React.useState([]);
  const addItem = (item) => {
    setItems([item, ...items]);
  }
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            SHOPPINGLIST
          </Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
