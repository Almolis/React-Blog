import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import BlogDetails from "./BlogDetails";

function App() {
  //javascript can be written here 


  //after return JSX is being used, if we want to write JS after return, we need to use {} brackets;
  //jsx cannot read objects, but only variables, arrays, and strings
  return (
    <Router> 
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/"> <Home/> </Route>
              <Route exact path="/create"> <Create/> </Route>
              <Route exact path="/blogs/:id"> <BlogDetails/> </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
