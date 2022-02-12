import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import CartList from './components/CartList';
import Header from './components/Header';

class Routes extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Router>
                    <Switch>
                        <Route path='/cart' render={()=><CartList/>}></Route>
                        <Route exact path='/' render={() => <App />} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default Routes;
  