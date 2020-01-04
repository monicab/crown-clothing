import React from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { signInWithGoogle, auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.emptyState();
  }

  emptyState = () => (
    {
      email: "",
      password: ""
    }
  )
  
  handleSubmit = async event => {
    const { email, password } = this.state;

    event.preventDefault();
    const user = await auth.signInWithEmailAndPassword(email, password);
    await createUserProfileDocument(user);
    
    this.setState(this.emptyState());

  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            label="password"
            handleChange={this.handleChange}
          ></FormInput>

          <div className='buttons'>
            <CustomButton type="submit">SIGN IN</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
