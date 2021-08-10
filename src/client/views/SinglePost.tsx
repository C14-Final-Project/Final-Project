import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { useParams } from 'react-router-dom'
import '../utils/SinglePost'

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
            <div className='mb-0'>
                <p>workin on it</p>
                <div id="gradient"></div>
                <div id="card">
                    <img src="https://i.pinimg.com/236x/e4/79/6f/e4796feff700a4b840d52244f108e331.jpg" />
                    <h2>title</h2>
                    <p>dayEvent</p>
                    <p>timeEvent</p>
                    <p>locationEventName</p>
                    <p>
                        text body
                    </p>
                    <div className='flex-column' id='userInfo'>
                        <ul><span className="left ">username</span></ul>
                        <ul><span className="left  ">email</span></ul>
                        <ul><span className="left ">profileName</span></ul>
                        <ul><span className="left ">profileType</span></ul>
                        <ul><span className="left ">profileLocation</span></ul>
                    </div>





                    <span className="left bottom">&nbsp;moneyAmount</span>

                    <span className="right bottom">posted on dayPosted at timePosted</span>
                </div>

            </div>
            <div className='mb-0'>
                <p>workin on it</p>
                <div id="gradient"></div>
                <div id="card">
                    <img src="https://i.pinimg.com/236x/e4/79/6f/e4796feff700a4b840d52244f108e331.jpg" />
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
        </div>

    )
}

export default SinglePost