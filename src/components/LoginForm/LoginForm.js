import React from 'react';
import {withRouter} from "react-router-dom";
import './LoginForm.scss';

class LoginForm extends React.Component {

    submitLogin = (event) => {
        event.preventDefault();
        this.props.goForwardHandler();
        this.props.history.push('/categories')
    };

    toSignupHandler = () => {
        this.props.goForwardHandler();
        this.props.history.push('/signup');
    };

    render() {
        return(
            <div className="login_section">
                <form onSubmit={this.submitLogin} action="#">
                    <fieldset>
                        <label htmlFor="login_name">Name</label>
                        <input type="text" name={'name'} id={'login_name'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="login_password">Password</label>
                        <input type="password" name={'password'} id={'login_password'}/>
                    </fieldset>
                    <fieldset>
                        <button type={'submit'}>Login</button>
                    </fieldset>
                </form>
                <p className="login_section__sign_up_link">Need an account? <button onClick={this.toSignupHandler}> Sign up </button></p>
            </div>
        )
    }
}

export default withRouter(LoginForm);