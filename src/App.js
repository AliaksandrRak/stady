import React from 'react';
import logo from './logo.svg';
import './AppStyle.sass';
import { connect } from 'react-redux';

class AppClass extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    console.log("mainReduser",this.props.mainReduser)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


const App = connect(
  (state) => ({
    mainReduser: state.mainReduser,
  }),
)(AppClass);
export default App;
