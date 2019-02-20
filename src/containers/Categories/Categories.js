import React from 'react';
import {withRouter} from 'react-router-dom';
import './Categories.scss';

class Categories extends React.Component {

    clickHandler = () => {
        this.props.goBackHandler();
        this.props.history.push('/')
    };

    render() {
        return (
            <div className={'test'}>
                <h1>hello</h1>
                <button onClick={this.clickHandler}>Back</button>
            </div>
        )
    }
}

export default withRouter(Categories);