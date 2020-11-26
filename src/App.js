import './App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />      
      </Switch>
    </div>
  );
}

export default App;
