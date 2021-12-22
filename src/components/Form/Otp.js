/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router";
import OTPInput from "react-otp-input";
import Button from "react-bootstrap/Button";
import "./Otp.css";
import { QuizContext } from "../../Helpers/Context";
// eslint-disable-next-line react/prop-types
function Otp({ fetchQuestions }) {
  const history = useHistory();
  const { mynumber, setnumber } = useContext(QuizContext);
  const [otp, setotp] = useState("");

  useEffect(() => {
    console.log("hi");
    console.log(mynumber);
  });
  var getLastdigit = mynumber;
  console.log(getLastdigit.slice(getLastdigit.length - 4));
  var getlastdigit = getLastdigit.slice(getLastdigit.length - 4);
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
        fetchQuestions();

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

  function handleChange(otp) {
    console.log(otp);
    setotp(otp);
  }

  return (
    <div className=" container verifyDiv">
      <div className="heading">
        <p className="p1">Verify Number</p>
        <p className="p2">
          An OTP has been sent to your entered mobile number XXXXXX
          {getlastdigit}
        </p>
      </div>

      <div className="otpElements">
        <p className="p3">Enter your Code here</p>
        <div className="otp">
          <OTPInput
            onChange={handleChange}
            value={otp}
            inputStyle="inputStyle"
            numInputs={6}
            separator={<span>-</span>}
          />
        </div>
      </div>
      <Button onClick={ValidateOtp}>Verify</Button>
    </div>
  );
}

export default Otp;
