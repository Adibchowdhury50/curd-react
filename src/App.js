
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
  
} from "react-router-dom";
import Home from "./Components/Home/Home";
import { UserProvder } from './Components/Usercontext/UserContext';
import Delete from './Components/Delete/Delete';
import Read from './Components/Read/Read';
import Create from './Components/Create/Create';

function App() {
  return (
    <div className="App">
      <UserProvder>
       
      <Router>
        <Switch>
        <Route path="/Create/">
            <Create/>
          </Route>

          <Route path="/Delete/:Id">
            <Delete/>
          </Route>
          <Route path="/Read/:Id">
            <Read/>
          </Route>
          
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserProvder>
      
     
    </div>
  );
}

export default App;
