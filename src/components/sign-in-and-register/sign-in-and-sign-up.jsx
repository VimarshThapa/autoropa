import React from 'react';
import "./sign-in-and-sign-up.scss";

import SignIn from "../sign-in/sign-in"
import SignUp from "../sign-up/sign-up"

function SignInAndSignUp() {
    return(
        <div className="signin-and-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;