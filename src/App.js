import Navbar from './navbar';
import Customerlist from './customerlist';
import Home from './home';
import Footer from './footer';
import Transfertable from './transfertable';
import Moneytransfer from './transferform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        
          <Switch>
            <Route exact path="/">
           <Home></Home>
            </Route>
            <Route exact path="/home">
            <Home></Home>
            </Route>
            <Route exact path="/customerlist">
             <Customerlist></Customerlist>
            </Route>
            <Route exact path="/moneytransfer">
             <Moneytransfer/>
            </Route>
            <Route exact path="/transferhistory">
             <Transfertable></Transfertable>
            </Route>
            
          </Switch>
          <Footer></Footer>
        
      </div>
    </Router>
  );
}

export default App;