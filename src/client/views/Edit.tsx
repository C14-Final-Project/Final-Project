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
		<div className="edit-account-settings">
			<div className="user-profile">
				<div className="user-avatar d-flex justify-content-center">
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
			<div className="about">
				<h5><i>Performance</i> Artist:</h5>		
				{profileObject.profileLocation}		
				<h6 className="mt-2 mb-2 text-dark">Birmingham, AL</h6>	
				<div className="mt-2 align-items-evenly">
				    <button type="button" id="tag-submit" name="submit" className="btn btn-warning m-1">Tag1</button>
					<button type="button" id="tag-submit" name="submit" className="btn btn-warning m-1">Tag2</button>
					<button type="button" id="tag-submit" name="submit" className="btn btn-warning m-1">Tag3</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100 d-flex justify-content-center align-items-center">
	<div className="edit-customCard d-flex">
		{/* <div className="row gutters"> */}
			{/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"> */}
				
			{/* </div> */}
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<h3 className="mb-3 text-primary"><i><b>Performance</b></i>™︁ Artist Details</h3>
					<label htmlFor="eMail"><i><b>Performance </b></i>™︁ User Bio:</label>
					<input type="textarea" className="form-control align-items-top" id="bio" placeholder="Bio: Full-Stack Web Developer by day, Heavy-Metal Drummer for O.O.P by night. Former lead singer for JavaScript Juggalos. Have performed several large venues, including a near-sellout of the BJCC in July, 2021."></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Username</label>
					<label htmlFor="fullName">{profileObject.profileName}</label>
					<input type="text" className="form-control mt-1" id="fullName" placeholder="DrummerBoi84"></input>
				</div>
			</div>
			
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="website">Website</label>
					<input type="url" className="form-control" id="website" placeholder="www.youtube.com/DrummerBoi84"></input>
				</div>
			{/* </div> */}
		</div>
		{/* <div className="row gutters"> */}
			
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="Street">Music Genre</label>
					<input type="name" className="form-control" id="Street" placeholder="Norwegian Nostril-Metal, Bluegrass"></input>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label htmlFor="ciTy">City</label>
					<input type="name" className="form-control" id="ciTy" placeholder="Birmingham"></input>
				</div>
			</div>
		
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
				<div className="form-group">
					<label htmlFor="zIp">Zip Code</label>
					<input type="text" className="form-control" id="zIp" placeholder="Zip Code"></input>
				</div>
			</div>
		{/* </div> */}
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
				<div className="text-right mt-1">
					<button type="button" id="submit" name="submit" className="btn btn-danger">Cancel</button>
					<button type="button" id="update-submit" name="submit" className="btn btn-primary">Update</button>
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