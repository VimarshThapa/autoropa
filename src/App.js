import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from "./components/header/header";
import SignInAndSignUp from "./components/sign-in-and-register/sign-in-and-sign-up";
import { auth, createUserProfileDocument} from "./firebase/firebase-utils";
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            }, () => {
              console.log(this.state)
            }
          )
        })
      }
      else{
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} /> 
            <Route path="/signin" component={SignInAndSignUp} />     
          </Switch>
      </div>
    );
  }
}

export default App;
