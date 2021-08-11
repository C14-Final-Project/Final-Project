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
                    <Container className="d-flex flex-column justify-content-center align-items-center">
                        <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-8'>
                                <div className="bg-white border rounded mt-2">
                                    <div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"></img>
                                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                                            </div>
                                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                        </div>
                                    </div>
                                    <div className="p-2 px-3"><span className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                                </div>
                            </div>
                            <div className='col-2'></div>
                        </div>
                    </Container>
                    <Container className="d-flex flex-column justify-content-center align-items-center">
                        <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-8'>
                                <div className="bg-white border rounded mt-2">
                                    <div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"></img>
                                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                                            </div>
                                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                        </div>
                                    </div>
                                    <div className="p-2 px-3"><span className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                                </div>
                            </div>
                            <div className='col-2'></div>
                        </div>
                    </Container>
                    <Container className="d-flex flex-column justify-content-center align-items-center">
                        <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-8'>
                                <div className="bg-white border rounded mt-2">
                                    <div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"></img>
                                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">Thomson ben</span><span className="text-black-50 time">40 minutes ago</span></div>
                                            </div>
                                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                                        </div>
                                    </div>
                                    <div className="p-2 px-3"><span className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                                </div>
                            </div>
                            <div className='col-2'></div>
                        </div>
                    </Container>
                    
                </Card.ImgOverlay>
                
            </Card>
            
        </div>

    )
}

export default SinglePost