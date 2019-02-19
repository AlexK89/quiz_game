import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Categories extends React.Component {
    render() {
        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <h1>hello</h1>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default withRouter(Categories);