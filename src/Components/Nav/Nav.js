import React from 'react';
import './Nav.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (<nav className='custom_nav'>
            <p className="custom_link" onClick={() => onRouteChange('SignIn')}>Sign
                Out</p>
        </nav>);
    }else {
        return (
            <nav className='custom_nav'>
                <p className="custom_link" onClick={() => onRouteChange('SignIn')}>Sign
                    In</p>
                <p className="custom_link"
                   onClick={() => onRouteChange('Register')}>Register</p>
            </nav>
        );
    }
};
export default Navigation;