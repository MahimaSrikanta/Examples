import React, {Component} from 'react';

class Form extends Component {
  state = {
    fields: {"name": '', 'password': ''},
    errors: {},
    successMsg:'',
  }

  validateForm =() => {
    let formValid = true;
    if(this.state.fields['name'] === ''){
      formValid = false;
      this.setState({errors :{'name': "*Please enter valid name"}});
    }else {
      if(this.state.fields['name'].match(/^[a-zA-Z]$/gi)){
        formValid = false;
        this.setState({errors :{'name': "*Please enter alphabet characters only"}});
      }
    }
    if(this.state.fields['password'] === ''){
      formValid = false;
      this.setState({errors :{'password': "*Please enter password"}});
    }
    return formValid;
  }

  handleChange =(event) => {
    let {fields}= this.state;
    fields[event.target.name] = event.target.value;
    this.setState({fields});
  }

  submituserRegistrationForm =(event) =>{
    event.preventDefault();
   if( this.validateForm()){
     this.setState({successMsg: "Success!!"})
   }else {
     this.setState({successMsg: 'Invalid Form'})
   }
  }
  render() {
    return(
    <div id="main-registration-container">
      <div id="register">
        <h3>Registration page</h3>
        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <label>Name:</label>
          <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.name}</div>
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          <input type="submit" className="button" value="Register" />
        </form>
        <p>{this.state.successMsg}</p>
      </div>
    </div>
    )
  }
}

export default Form;