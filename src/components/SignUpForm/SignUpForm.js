import React from 'react';
import {withRouter} from "react-router-dom";
import './SignUpForm.scss';

class SignUpForm extends React.Component {

    submitSignup = (event) => {
        event.preventDefault();
        this.props.goForwardHandler();
        this.props.history.push('/categories')
    };

    toLoginHandler = () => {
        this.props.goBackHandler();
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="sign_up_section">
                <form onSubmit={this.submitSignup} action="#">
                    <fieldset>
                        <label htmlFor="signup_name">Name</label>
                        <input type="text" name={'name'} id={'signup_name'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="signup_email">Email</label>
                        <input type="email" name={'email'} id={'signup_email'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="signup_password">Password</label>
                        <input type="password" name={'password'} id={'signup_password'}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="signup_password_repeat">Repeat password</label>
                        <input type="password" name={'password_repeat'} id={'signup_password_repeat'}/>
                    </fieldset>
                    <fieldset>
                        <button type={'submit'}>Login</button>
                    </fieldset>
                </form>
                <div className="btn_wrapper">
                    <button onClick={this.toLoginHandler}>
                        <img src={require('../../images/back_icon.svg')} alt="back icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUpForm);