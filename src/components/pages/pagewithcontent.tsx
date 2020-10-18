import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '../common/menu';


const PageWithContent: React.FC = ({children}) => {
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionAppear = {true}
                transitionAppearTimeout = {600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'SlideIn'}
            >
                <Menu>
                    {children}
                </Menu>
                
            </ReactCSSTransitionGroup>
        </div>
    );
};



export default PageWithContent;