import React from "react";
import facebook from "../assests/fb-logo.svg"
import google from "../assests/google-logo.svg";
import twitter from "../assests/twiitter-logo.svg";

function Icons() {
  return (
    <>
      <div className="SocialIcons">
        <div className="icon">
          <img src={google} alt="google" />
        </div>
        <div className="icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <h6>
        Don't have an Account? <b>Create new now!</b>
      </h6>
      <h6>
        By signing up, you are agree with our <b>Term & Conditions</b>
      </h6>
    </>
  );
}

export default Icons;