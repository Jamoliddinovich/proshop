import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Header from "./Components/header";
import HomeScreen from './Screens/homeScreen'
import ProductScreen from "./Screens/productsScreen"
import CartScreen from "./Screens/cartScreen"
import Footer from "./Components/footer"
import React from "react"
const App = ()=> {
  return (
<Router>
<Header/>
<Switch>
<Route path="/" component={HomeScreen} exact/>
<Route path="/products/:id" component={ProductScreen} />
<Route path="/cart/:id" component={CartScreen}/>
<Route path="/login">
  login
</Route>
</Switch>
<Footer/>
</Router>
  );
  }
export default App;
