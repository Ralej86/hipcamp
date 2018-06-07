import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      first_name: '',
      last_name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(this.props.history.push('/'))

    // this.props.processForm(user).then(()=> this.props.history.push('/'))
     this.props.processForm(user).then(this.props.closeModal)
  }

  renderErrors() {
    return(
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.formType === 'signup') {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to hipCamp!
            <br/>
            Please {this.props.formType} or {this.props.otherForm}
            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email Address:
                <input type="text"
                  value={this.state.email_address}
                  onChange={this.update('email_address')}
                  className="login-input"
                />
               </label>


              <br/>
              <label>First Name:
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="login-input"
                />
               </label>
                <br/>

              <br/>
              <label>Last Name:
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="login-input"
                />
               </label>
               <br/>


              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to hipCamp!
        <br/>
        Please {this.props.formType} or {this.props.otherForm}
        <div onClick={this.props.closeModal} className="close-x">X</div>
        {this.renderErrors()}
        <div className="login-form">
        <br/>
        <label>Email Address:
        <input type="text"
        value={this.state.email_address}
        onChange={this.update('email_address')}
        className="login-input"
        />
        </label>


        <br/>
        <label>Password:
        <input type="password"
        value={this.state.password}
        onChange={this.update('password')}
        className="login-input"
        />
        </label>
        <br/>
        <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
        </form>
        </div>
      );

    }


 }







}

export default withRouter(SessionForm);
