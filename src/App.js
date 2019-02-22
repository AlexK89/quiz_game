import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import LoginPage from './containers/LoginPage/LoginPage';
import Categories from './containers/Categories/Categories';
import './App.scss';

const dirs = {
    RIGHT:'Right',
    LEFT:'Left'
};

class App extends Component {
    state = {
        dir: dirs.RIGHT
    };

    goBackHandler = () => this.setState({dir: dirs.RIGHT});
    goForwardHandler = () => this.setState({dir: dirs.LEFT});

    render() {
        const oldPageClass = `oldSlideTo${this.state.dir}`;
        const newPageClass = `slideTo${this.state.dir}`;
        return (
            <Route render={ ( { location } ) => {
                return (
                    <div className="App">
                        <TransitionGroup className={`App ${oldPageClass}`}>
                            <CSSTransition key={location.key} timeout={200} classNames={newPageClass}>
                                <Switch location={location}>
                                    <Route exact path={'/categories'} component={() => {
                                        return <Categories goBackHandler={this.goBackHandler}/>
                                    }}/>
                                    <Route path={'/'} component={() => {
                                        return <LoginPage goBackHandler={this.goBackHandler} goForwardHandler={this.goForwardHandler}/>
                                    }}/>
                                    <Route component={() => <h1>404 Page not found</h1>}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )
            }}/>

        );
    }
}

export default App;
