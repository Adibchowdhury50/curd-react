
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
import Edit from './Components/Edit/Edit';

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
          <Route path="/Edit/:Id">
            <Edit/>
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
