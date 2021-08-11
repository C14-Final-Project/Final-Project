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
<div className="card ">
	<div className="profile-card-body">
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
				<img
                          src="https://media-exp1.licdn.com/dms/image/C4E03AQENJn5vvnAqgA/profile-displayphoto-shrink_800_800/0/1627999158218?e=1633564800&v=beta&t=LYO8klYD-nQqNifC8hBd9tNjy2a1MNLliRVOuY_j2kM"
                          alt="Admin"
                          className="rounded-circle"
                          width="200"
                        ></img>

				</div>
				<h5 className="user-name">{profileObject.username}</h5>
				<h6 className="user-type">{profileObject.profileType}</h6>
			</div>
			<div className="about ">
				<h5><i>Performance</i> Artist:</h5>				
				<h6 className="mt-1 mb-2 text-dark">Birmingham, AL</h6>			
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100 m-0 p-0">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-dark"><i><b>Performance</b></i>™︁ Artist Details</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="fullName">{profileObject.profileName}</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group m-0 p-0">
					<label htmlFor="eMail"><i><b>Performance </b></i>™︁ User Bio:</label>
					<input type="textarea" className="form-control" id="bio" placeholder="Bio:   Full-Stack Web Developer by day, Heavy-Metal
                              Drummer for O.O.P, by night."></input>
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
			
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="Street">Street</label>
					<input type="name" className="form-control" id="Street" placeholder="Enter Street"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="ciTy">City</label>
					<input type="name" className="form-control" id="ciTy" placeholder="Birmingham"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="sTate">State</label>
					<input type="text" className="form-control" id="sTate" placeholder="Alabama"></input>
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