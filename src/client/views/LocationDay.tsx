import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const LocationDay = () => {

    const { propsObj, setPropsObj } = useContext(userContext)
    const { locationEventName } = useParams<{ locationEventName: string }>();
    const { sidebarSelection } = useParams<{ sidebarSelection: string }>();

    const getPosts = async () => {
        try {
            const res = await fetch(`/api/posts/${locationEventName}/${sidebarSelection}/view`);
            const posts = await res.json();
            setArray(posts);
            console.log(posts)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '100%',
        width: '100%',
        padding: '0px',
        fontSize: '20px'
    }

    const imgBuddy = {
        height: '33%',
        width: '33%',
        borderRadius: '10px'
    }

    const chirpBuddy = {
        borderRadius: '10px'
    }

    const [options, setOptions] = useState(false)
    const [update, setUpdate] = useState('')
    const [array2, setArray2] = useState('')
    const [array, setArray] = useState(propsObj.posts)



    useEffect(() => {
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

    useEffect(() => {
        setTimeout(() => { setArray2(displayedPosts); }, 100)
    }, [])

    const hoverEnterPost = (id) => {
        let postBtn = document.querySelector(`#profile-card-${id}`)
        postBtn.classList.remove('invisible')
    }

    const hoverLeavePost = (id) => {
        let postBtn = document.querySelector(`#profile-card-${id}`)
        postBtn.classList.add('invisible')
    }


    //select Posts.id, Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Users.username, Users.email, Users.profileLocation, Users.profileType, Users.profileName
    //from Posts
    //join Users on Posts.userid = Users.id
    //where Posts.locationEventName = ?;

    const displayedPosts = array.map(val => {
        return (


            <Container key={`post-${val.id}`} id={`postid-${val.id}`} className="d-flex flex-column pt-2 justify-content-center align-items-center">
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className="bg-black border border-white rounded mt-2">
                            <div>
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                    <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src={`${val.profilePhoto}`} width="45"></img>
                                        <div className="d-flex flex-column flex-wrap ml-2"><Link style={{ textDecoration: "none" }} to={`/users/${val.username}`}><h2 className="font-weight-bold text-white display-5">&nbsp;&nbsp;{val.profileName}</h2></Link></div>
                                        
                                    </div>
                                    <div className="d-flex flex-row align-items-right feed-text px-2">
                                        
                                        <div className="d-flex flex-row align-items-right flex-wrap ml-2"><span className="text-black-50 ms-1 me-1 time badge bg-warning text-dark">{val.tag1}</span><span className="text-black-50  ms-1 me-1 time badge bg-warning text-dark">{val.tag2}</span><span className="text-black-50  ms-1 me-1 time badge bg-warning text-dark">{val.tag3}</span></div>
                                    </div>
                                    <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-white-50"></i></div>
                                </div>
                            </div>
                            <div className="p-1 px-3"><h2 className='text-white'>{val.title}</h2></div>
                            <div className="p-2 px-3"><span className='text-white'>{val.text}</span></div>
                            <div className="p-1 px-3"><span className="text-white-50 time">Day Wanted: {val.dayEvent}</span><span className="text-white-50 time">&nbsp;Time Wanted: {val.timeEvent}</span><span className="text-white-50 time">&nbsp;Day posted: {val.dayPosted} Time posted: {val.timePosted}</span><span className="text-white-50 time">&nbsp;Hire price: {val.moneyAmount}</span></div>
                            <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </Container>

        )
    });


    return (

        <Card className="bg-dark d-flex justify-content-center align-items-center ">
            <Card.Img
                className=""
                src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
                alt="Card image"
            />

            <Card.ImgOverlay className="flex-column bg-black ">

                {array2}

            </Card.ImgOverlay>

        </Card>

    )
}

export default LocationDay

