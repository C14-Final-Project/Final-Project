import { nameProps } from "../utils/types";
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../utils/userContext";

const SinglePost = () => {
  const { propsObj, setPropsObj } = useContext(userContext);

  return (
    <div>
      <p>workin on it</p>
      <div id="gradient"></div>
      <div id="card">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43604/profile/profile-512_1.jpg" />
        <h2>Ondřej Page Bárta</h2>
        <p>Student of IT in Czech republic.</p>
        <p>
          Interested in Web technologies like HTML5, CSS3, JavaScript, PHP,
          MySQL, etc.
        </p>
        <p>Love Codepen.io and respect Chris Coyier.</p>
        <span className="left bottom">tel: 731 366 ***</span>
        <span className="right bottom">adress: Czech Republic</span>
      </div>
    </div>
  )
};

export default SinglePost;
