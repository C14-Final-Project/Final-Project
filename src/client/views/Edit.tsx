import * as React from "react";
import "../utils/EditUserAccount.css";
import Image from "react-bootstrap/Image";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../utils/userContext";
import { useParams } from "react-router";

const EditUserAccount = () => {
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
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100 mt-2">
	<div className="card-body">
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
					<img src= "https://cdn.discordapp.com/attachments/847941895615021056/874750447410380860/headshoticon_-_Copy.jpg" alt="Performance User Photo"></img>
				</div>
				<h5 className="user-name">{profileObject.username}</h5>
				<h6 className="user-type">{profileObject.profileType}</h6>
			</div>
			<div className="about">
				<h5><i>Performance</i> Bio:</h5>
				<p>{profileObject.profileBio}</p>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100 mt-2">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-dark"><i><b>Performance</b></i>™︁ {profileObject.profileType} Details</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">{profileObject.profileName}</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone number"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website URL</label>
					<input type="url" className="form-control" id="website" placeholder="Website url"></input>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-dark">{profileObject.profileLocation}</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="Street">Street</label>
					<input type="name" className="form-control" id="Street" placeholder="Enter Street"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="ciTy">City</label>
					<input type="name" className="form-control" id="ciTy" placeholder="Enter City"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="sTate">State</label>
					<input type="text" className="form-control" id="sTate" placeholder="Enter State"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="zIp">Zip Code</label>
					<input type="text" className="form-control" id="zIp" placeholder="Zip Code"></input>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
				<div className="text-right mt-1">
					<button type="button" id="submit" name="submit" className="btn btn-danger">Cancel</button>
					<button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
					<button type="button" id="submit" name="submit" className="btn btn-success">Save</button>
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

export default EditUserAccount;