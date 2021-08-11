import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { useParams } from 'react-router-dom'
import '../utils/SinglePost'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

/*
select Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Posts.locationEventName, Users.username, Users.email, Users.profileLocation, Users.profileType, Users.profileName, Users.profilePhoto
    from Posts
    join Users on Posts.userid = Users.id
    where Posts.id = ?; 
*/
// --> replace 'Posts' or 'Users' with 'postObject'
// --> i.e. postObject.title, postObject.text....postObject.usename, postObject.email... all the way to profilePhoto


const SinglePost = () => {

    const { locationEventName } = useParams<{ locationEventName: string }>();
    const { id } = useParams<{ id: string }>();
    const { propsObj, setPropsObj } = useContext(userContext)
    const [postObject, setPostObject] = useState()

    const getProfile = async () => {
        try {
            const res = await fetch(`/api/posts/${locationEventName}}/${id}`);
            const post = await res.json();
            setPostObject(post)
            console.log(post)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])
    //Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Posts.locationEventName, Users.username, Users.email, Users.profileLocation, Users.profileType, Users.profileName, Users.profilePhoto
    return (

        <div className='bg-black'>
            <Card className="bg-dark d-flex justify-content-center align-items-center ">
                <Card.Img
                    className=""
                    src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
                    alt="Card image"
                />

                <Card.ImgOverlay className="flex-column bg-black ">
                   
                    
                </Card.ImgOverlay>
                
            </Card>
            
        </div>

    )
}

export default SinglePost