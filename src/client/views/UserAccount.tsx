import * as React from "react";
import "../utils/UserAccount.css";
import Image from "react-bootstrap/Image";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../utils/userContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const { propsObj, setPropsObj } = useContext(userContext);
  const { username } = useParams<{ username: string }>();
  const [profileObject, setProfileObject] = useState({
    userid: null,
    username: username,
    profileName: "",
    profileLocation: "",
    profileBio: "",
    profileType: "",
    profilePhoto: "",
    popularity: "",
    tag1: "",
    tag2: "",
    tag3: "",
  });

  const getProfile = async () => {
    try {
      const res = await fetch(`/api/users/${username}`);
      const info = await res.json();
      setProfileObject(info);
      console.log(info);
      console.log(profileObject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="thebody">
        <div className="container">
          <div className="users-main-body">
            <div className="bg">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3 mt-2">
                  <div className="card">

                    <div className="customCard">

                      <div className="d-flex flex-column align-items-center text-center">
                        <h4>{profileObject.username}</h4>
                        <img
                          src={`${profileObject.profilePhoto}`}
                          alt="Admin"
                          className="rounded-circle"
                          width="200"
                        ></img>

                        <div className="mt-2">

                          <h5>
                            <i>
                              <b>Performance™︁ </b>
                            </i>
                            {profileObject.profileType}
                          </h5>
                          <p className=" mb-1">
                            <p className="font-size-sm">
                              Location: {profileObject.profileLocation}
                            </p>
                          </p>
                          <button className="btn btn-dark">Follow</button>
                          <button className="btn btn-dark m-1">
                            Booking Availability
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="customCard">

                    <div className="card mt-2">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-globe mr-2 icon-inline"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="2" y1="12" x2="22" y2="12"></line>
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            Website
                          </h6>
                          <span>performance/adamv84.com</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-twitter mr-2 icon-inline text-info"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                            Twitter
                          </h6>
                          <span>@adammathewv</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-instagram mr-2 icon-inline text-danger"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                            Instagram
                          </h6>
                          <span>adammathewvaughn</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-facebook mr-2 icon-inline text-primary"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            Facebook
                          </h6>
                          <span>adammathewvaughn</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mt-2">
                  <div className="card mb-2">

                    <div className="customCard h-250px">
                      <div className="card h-100">
                        <div className="bio-customCard">

                          <div className="account-settings">
                            <div className="about p-0 m-0">
                              <h5>
                                <i>Performance™︁</i> Bio:
                              </h5>
                              Full-Stack Web Developer by day, Heavy-Metal
                              Drummer for "O.O.P," by night. Former lead singer for JavaScript Juggalos. Have performed several large venues, including a near-sellout of the BJCC in July, 2021.
                              {/* <p>{profileObject.profileBio}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            className="btn btn-primary mt-1"
                            target="__blank"
                            to={`/users/${profileObject.username}/edit`}
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">

                        <div className="customCard">

                          <h6 className="d-flex align-items-center mb-3">
                            Tickets Sales For
                            <i>
                              <b> Performance™︁ </b>
                            </i>
                            Venues
                          </h6>
                          <small>BJCC</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <small>Boutwell Auditorium</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <small>Oak Mtn. Ampitheatre</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                          <small>Bridgestone Arena</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
                          <small>Music City Center</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">

                        <div className="customCard">

                          <h6 className="d-flex align-items-center mb-3">
                            Merchandise Sales For
                            <i>
                              <b> Performance™︁ </b>
                            </i>
                            Venues
                          </h6>
                          <small>BJCC</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <small>Boutwell Auditorium</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "72%" }}
                            ></div>
                          </div>
                          <small>Oak Mtn. Ampitheatre</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <small>Bridgestone Arena</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                          <small>Music City Center</small>
                          <div
                            className="progress mb-3"
                            style={{ height: "5px" }}
                          >
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "56%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;