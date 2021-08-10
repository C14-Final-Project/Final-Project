import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { useParams } from 'react-router-dom'

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
            
                
                <div key={`post-${val.id}`} id={`postid-${val.id}`}  style={{ margin: "auto" }} className="row mb-3 mt-3 ps-2">
                    <div id={`profile-card-${val.id}`} className="col-md-3 invisible  mb30">
                        <div className="card">

                            <div className="row">
                                <img style={imgBuddy} src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="col-4 m-2 rounded-circle" ></img>
                                <h4 className="flex-column col-7 align-items-bottom"><span>{val.profileName}</span></h4>
                                <div className='col-1'></div>
                            </div>
                            <div>
                                <ul><span>View {val.username}'s profile</span></ul>
                                <ul><span>{val.tag1}</span></ul>
                                <ul><span>{val.tag2}</span></ul>
                                <ul><span>{val.tag3}</span></ul>

                            </div>


                        </div>
                    </div>
                    <div id={`post-card-${val.id}`}  className="border-start me-2 col-md-9">
                        <div className="card">
                            <div>
                                <ul>
                                    <h4>{val.title}</h4>
                                </ul>


                                <div className="tab-content admin-tab-content pt30">
                                    <div role="tabpanel" className="tab-pane active show" id="t1">
                                        <ul className="activity-list list-unstyled">
                                            <li>{val.text}</li>
                                            <li>Time Wanted: {val.timeEvent}</li>
                                            <li>Day Wanted: {val.dayEvent}</li>
                                            <li>Day posted: {val.dayPosted}</li>
                                            <li>Time posted: {val.timePosted}</li>
                                            <li>Hire price: {val.moneyAmount}</li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    });


    return (

        <div>
            <div className='row m-3'></div>
            
            {array2}

            <div className='d-flex row mt-5 mb-5'>
                <div className='col-12'>
                    <div className='lead justify-content-center row'>End of Feed</div>
                </div>
            </div>
        </div>

    )
}

export default LocationDay




