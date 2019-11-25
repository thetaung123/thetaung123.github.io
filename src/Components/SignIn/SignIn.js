import React from 'react';
import SignIn1 from "./SignIn1";
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    user =
        {
            email: 'todd@gmail.com',
            password: '123'
        };
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    };
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    };
    onSubmitSignIn = () => {
        if(this.state.signInEmail === this.user.email && this.state.signInPassword===this.user.password){
            this.props.onRouteChange('home')
        }else{
            window.alert('email or password is wrong')
        }
    };


    render() {
        return (
            <SignIn1 onSubmitSignIn={this.onSubmitSignIn} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange}/>
        );
    }
};
export default SignIn;