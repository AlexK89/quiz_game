import React from 'react';
import {Switch, Route} from 'react-router';
import { withRouter } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './LoginPage.scss';

class LoginPage extends React.Component {
    fadeOut = (event, route) => {
        const signUpSection = event.target.parentNode.parentNode;
        signUpSection.classList.add('fadeOut');
        setTimeout(() => {
            this.props.history.push(route)
        }, 400);
    };

    render() {
        return (
            <div className="login_page">
                <div className="login_page__header">
                    <div className="logo">
                        <img src={require('../../images/logo.png')} alt="GameBunny logo"/>
                    </div>
                    <h2>GameBunny</h2>
                    <p>Best quiz ever...</p>
                </div>

                <Switch>
                    <Route exact path={'/'} component={() => {
                        return <LoginForm fadeOut={this.fadeOut}/>
                    }}/>
                    <Route exact path={'/signup'} component={() => {
                        return <SignUpForm fadeOut={this.fadeOut}/>
                    }}/>
                </Switch>


            </div>
        )
    }
}
export default withRouter(LoginPage);