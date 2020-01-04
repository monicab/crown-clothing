import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/header/header.component";
import { HomePage } from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)})
        });
      }
      else {
        this.setState({ currentUser: userAuth }, () => {console.log(this.state)})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
   return (
    <Router>
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path='/signin'>
            <SignInAndSignUpPage/>
          </Route>
        </Switch>
      </div>
    </Router>
   )
  }
}
