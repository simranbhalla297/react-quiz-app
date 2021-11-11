/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from "react";
import firebase from "../../Firebase.js";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
// eslint-disable-next-line react/prop-types
export default function Signup({ fetchQuestions }) {
  const history = useHistory();
  const [mynumber, setnumber] = useState("");
  // eslint-disable-next-line no-console
  const setUpRecaptcha = () => {
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("captca verfied");
        },
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(mynumber);

    //
    setUpRecaptcha();
    const phoneNumber = "+91" + mynumber;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("otpm sent");
        redirectToOtpScreen();
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
        // ...
      });
  };
  //redirect to OTP screen

  const redirectToOtpScreen = () => {
    console.log("redirect to OTP screen");
    history.push("/otp");
  };
  return (
    <div>
      <div className="loginForm">
        <div id="sign-in-button"></div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeHx60JdEAN-hupEX-N5K86jQCt-HVvxiIg&usqp=CAU"
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeHx60JdEAN-hupEX-N5K86jQCt-HVvxiIg&usqp=CAU"
            className="quizImg"
          />
        </div>
        <div className="text">
          {" "}
          <h2>Login or Signup</h2>
        </div>

        <form>
          <div className="form">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              onChange={(e) => setnumber(e.target.value)}
              value={mynumber}
            />
          </div>
          <div className="btn">
            <Button className="continueBtn" onClick={onSignInSubmit}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
