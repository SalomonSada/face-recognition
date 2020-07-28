import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "0.5em",
          }}
        >
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline p3 pointer"
          >
            Sign out
          </p>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "0.5em",
          }}
        >
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline p3 pointer ma3"
          >
            Sign in
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline p3 ma3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
