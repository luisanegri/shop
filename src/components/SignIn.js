import React from 'react';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('handleSubmit', this.state);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('e + p', email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  onChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form class="sign" onSubmit={this.handleSubmit}>
          <label for="example">Email address</label>
          <input
            class="form-control"
            name="email"
            type="email"
            onChange={this.onChange}
            value={this.state.email}
            label="email"
            required
          />
          <label for="example">Password</label>
          <input
            class="form-control"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            label="password"
            required
          />
          <div className="buttons">
            <button type="submit" className="custom-button">
              SIGN IN
            </button>
            <button
              onClick={signInWithGoogle}
              className="custom-button google-sign-in"
              isGoogleSignIn
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
