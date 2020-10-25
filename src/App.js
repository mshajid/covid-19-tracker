import './App.css';
import { MenuItem, FormControl, Select, } from "@material-ui/core";


function App() {
  return (
    <div className="app">
      <h1>COVID 19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Yo</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}

export default App;
