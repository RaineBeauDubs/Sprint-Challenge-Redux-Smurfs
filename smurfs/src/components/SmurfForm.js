import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  handleChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf, 
        [event.target.name]: event.target.value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
  }

  render() {
    return (
      <div>
        <h2>Add Smurf</h2>
        <form onSubmit={this.addSmurf}>
          <input 
            type='text' 
            name='name' 
            placeholder="Name..." 
            onChange={this.handleChange} 
            value={this.state.newSmurf.name}
          />
          <input 
            type='text' 
            name='age' 
            placeholder="Age..." 
            onChange={this.handleChange} 
            value={this.state.newSmurf.age}
          />
          <input 
            type='text' 
            name='height' 
            placeholder="Height..." 
            onChange={this.handleChange} 
            value={this.state.newSmurf.height}
          />
          {this.props.addError ? <h3>Oops! Something went wrong!</h3> : null}
          {this.props.addSuccess ? <h3>Smurf Added to Village!</h3> : null}
          <button type='submit'>{this.props.addingSmurf ? <h5>Adding...</h5> : 'Add Smurf!'}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf, 
    addError: state.addError, 
    addSuccess: state.addSuccess
  }
}

export default connect(
  mapStateToProps, 
  { addSmurf }
)(SmurfForm);