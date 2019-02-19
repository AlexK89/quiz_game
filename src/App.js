import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from './containers/LoginPage/LoginPage';
import Categories from './containers/Categories/Categories';
import './App.scss';

class App extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <Switch>
                    {/*<Route exact path={'/categories'} component={() => {*/}
                        {/*return <Categories />*/}
                    {/*}}/>*/}
                    <Route path={'/'} component={() => {
                        return <LoginPage/>
                    }}/>
                    <Route component={() => <h1>404 Page not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
