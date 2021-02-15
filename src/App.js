import './App.css';
import DetailsPage from './components/Details';
import  ProductsListPage from "./components/Products";
import CartPage from "./components/Cart";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Switch>
      <Route exact path="/" name="Product List Page" render={props => <ProductsListPage {...props}/>} />
      <Route exact path="/details" name="Details Page" render={props => <DetailsPage {...props}/>} />
      <Route exact path="/cart" name="Cart Page" render={props => <CartPage {...props}/>} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
