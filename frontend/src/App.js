import {Route,BrowserRouter as Router,Link,Switch} from "react-router-dom";
import Header from "./Components/header";
import React from "react"
const App = ()=> {
  return (
<Router>
<Switch>
<Header/>
<Route path="/" exact>

</Route>
</Switch>
</Router>
  );
  }
export default App;
