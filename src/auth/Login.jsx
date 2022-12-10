import React from "react";
import { Navigate } from "react-router-dom";
import OktaSignInWidget from "./OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("Sign in error:", err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ? (
    <Navigate to={{ pathname: "/comp584_final_project/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
