import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>SignIn Page</div>
      <button onClick={logGoogleUser}>SIGN IN</button>
    </>
  );
}
