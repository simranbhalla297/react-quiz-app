/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import "./Otp.css";
// eslint-disable-next-line react/prop-types
function Otp({ fetchQuestions }) {
  const history = useHistory();
  const [otp, setotp] = useState("");
  const ValidateOtp = () => {
    const code = otp;
    console.log(code);
    // eslint-disable-next-line no-undef
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("otp right sign in");
        alert("oty verified");
        redirectToOtpQUiz();

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };

  const redirectToOtpQUiz = () => {
    console.log("redirect to Quiz screen");
    history.push("/quiz");
    fetchQuestions();
  };

  return (
    <div className="otpScreen">
      <div className="otpContainer">
        <div>
          <input
            type="text"
            placeholder="Enter your OTP"
            onChange={(e) => setotp(e.target.value)}
          ></input>
          <br />
          <br />
          <Button onClick={ValidateOtp}>Verify</Button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
