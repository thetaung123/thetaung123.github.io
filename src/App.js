import React from 'react';
import './App.css';
import Profile from "./Components/Profile/Profile";
import SignIn from "./Components/SignIn/SignIn";
import Nav from './Components/Nav/Nav'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      route: 'SignIn',
      errorState: false,
      helperText: 'Please insert Dollars only',
      user: {
        credits: 99.00,
        timesCreditUse: 0
      }
    }
  }
  onButtonSubmit = () => {
    const amount = Number(document.getElementById('standard-basic').value);
      if(!amount){
        return this.setState({
          errorState: true,
          helperText: 'Enter the amount, please'
        })
      }
      if(!isNaN(amount)){
        const amtLeft = this.state.user.credits - amount;
        this.setState(Object.assign(this.state.user,{credits: amtLeft}));
        this.setState({
          errorState: false,
          helperText: 'Please insert Dollars only'
        });
        fetch('https://floating-plains-80978.herokuapp.com/commit',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            times: this.state.user.timesCreditUse
          })
        }).then(response => response.json())
            .then(data => {
              this.setState(Object.assign(this.state.user,{timesCreditUse: data}));
            });
        document.getElementById('standard-basic').value = null;
      }else {
        this.setState({
          errorState: true,
          helperText: 'Enter numbers only, please'
        })
      }

  };
  onRouteChange = (route)=> {
    if(route === 'home'){
      this.setState({
        isSignedIn: true
      });
    }else if(route === 'SignIn'){
      this.setState({
        isSignedIn: false
      })
    }
    this.setState({route:route})
  };

  render() {
    const {helperText,errorState,route} = this.state;
    return (
        <div className="App">
          <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
          {route==='SignIn' ?
                <SignIn onRouteChange={this.onRouteChange}/>
            :<Profile credits={this.state.user.credits} onButtonSubmit={this.onButtonSubmit}
            helperText={helperText} errorState={errorState} times={this.state.user.timesCreditUse}/>
          }
        </div>
    );
  }
}

export default App;
