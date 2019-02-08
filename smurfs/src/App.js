import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';

import { getSmurfs } from './actions/index';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {
    return (
      <div className="App">
        <div className='topBar'>
          <h1>Smurf Villiage Directory</h1>
        </div>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs, 
  fetchingSmurfs: state.fetchingSmurfs, 
  addError: state.addError, 
  addSuccess: state.addSuccess
})

export default connect(
  mapStateToProps, 
  { getSmurfs }
)(App);
