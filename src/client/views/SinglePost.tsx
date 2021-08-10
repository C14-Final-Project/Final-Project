import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'

/*
select Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Posts.locationEventName, Users.username, Users.email, Users.profileLocation, Users.profileType, Users.profileName, Users.profilePhoto
    from Posts
    join Users on Posts.userid = Users.id
    where Posts.id = ?; 
*/
// --> replace 'Posts' or 'Users' with 'postObject'
// --> i.e. postObject.title, postObject.text....postObject.usename, postObject.email... all the way to profilePhoto


const SinglePost = () => {

    const { propsObj, setPropsObj } = useContext(userContext)
    const [postObject, setPostObject] = useState()

    const getProfile = async () => {
        try {
            const res = await fetch(`/api/posts/:locationEventName/:id`);
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

    return (

        <div>
            <p>workin on it</p>
        </div>
    )
}

export default SinglePost