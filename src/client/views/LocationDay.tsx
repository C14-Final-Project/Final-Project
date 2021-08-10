import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'

const LocationDay = () => {

    const { propsObj, setPropsObj } = useContext(userContext)

    console.log(propsObj.posts)

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
        height: '70px',
        width: '70px',
        borderRadius: '10px'
    }

    const chirpBuddy = {
        borderRadius: '10px'
    }

    const [options, setOptions] = useState(false)
    const [update, setUpdate] = useState('')
    const [array2, setArray2] = useState('')
    const [array, setArray] = useState(propsObj.posts)

    const typingPost = (e) => {
        setUpdate(e.target.value)
        console.log(update)
    }

    const newPost = () => {
        let date = new Date();
        let prePost = {
            text: update,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            id: Math.random()
        };
        setArray([...array, prePost])
    }

    useEffect(() => {
        let correctedDisplayedPosts = displayedPosts.reverse();
        setArray2(correctedDisplayedPosts)
    }, [array])

    useEffect(() => {
        setTimeout(() => { setArray2(displayedPosts); }, 100)
    }, [])

    const hoverPostEnter = () => {
        let beep = document.querySelector('.beep')
        beep.classList.remove('invisible')
    }

    const hoverPostLeave = () => {
        let beep = document.querySelector('.beep')
        beep.classList.add('invisible')
    }
    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.add('text-danger')
        console.log(array2)
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }
    

    const hoverEnterLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.add('text-danger')
    }

    const hoverLeaveLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.remove('text-danger')
    }

    const hoverEnterRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.remove('text-danger')
    }

    const displayedPosts = array.map(val => {
        return (
            <div key={`the-array-${Math.random()}`} onMouseEnter={() => hoverPostEnter()} onMouseLeave={() => hoverPostLeave()} className='row'>
                <div className='col-1'></div>
                <div id='test' className='col-1 beep invisible align-self-center lead'>
                    <div>
                        <div id='btnLike' style={hoverBuddy} onMouseEnter={() => hoverEnterLike()} onMouseLeave={() => hoverLeaveLike()} className='border-right mt-3 lead border-secondary text-right pr-2'>like</div>
                    </div>
                    <div className=''>
                        <div id='btnRec' style={hoverBuddy} onMouseEnter={() => hoverEnterRec()} onMouseLeave={() => hoverLeaveRec()} className='border-right lead border-secondary text-right pr-2'>repost</div>
                    </div>
                    <div>
                        <div id='btnSave' style={hoverBuddy} onMouseEnter={() => hoverEnterSave()} onMouseLeave={() => hoverLeaveSave()} className='border-right lead border-secondary text-right pr-2'>save</div>
                    </div>
                    <div>
                        <div id='btnShare' style={hoverBuddy} onMouseEnter={() => hoverEnterShare()} onMouseLeave={() => hoverLeaveShare()} className='border-right mb-3 lead border-secondary text-right pr-2'>share</div>
                    </div>
                </div>
                <div  id='mainbody' className='col-9 d-flex flex-column mt-3 overflow-auto'>
                    <blockquote style={chirpBuddy} className="blockquote bg-white border p-5">
                        <div className='row'>
                            <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                            <div className='col-8'>
                                <div className='pl-5 lead'>{val.moneyAmount}</div>
                                <p className="pl-5 mb-0">{val.title}</p>
                                <footer className="ml-5 blockquote-footer"> on <cite title="Source Title">{val.dayEvent} at {val.timeEvent}</cite></footer>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div className='col-1'></div>
            </div>
        )
    });


    return (

        <div>
            <div className='pb-1'>
                <div className='row pb-2 mb-4 d-flex flex-row bg-danger bg-gradient text-white'>
                    <div className='col-2 display-4 text-center'>‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎🗑️</div>
                    <div className='col-10 pl-4 display-4' >'s timeline</div>
                </div>
                <div className='row d-flex'>
                    <div className='col-2'>
                        <div className=''>
                            <div className='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>post</div>
                        </div>
                        <div>
                            <div className='border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>image</div>
                        </div>
                        <div>
                            <div className='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>link</div>
                        </div>
                    </div>
                    <div className='col-9'>

                        <textarea style={textBuddy} onChange={e => typingPost(e)} className="p-2" rows={2}></textarea>
                    </div>
                    <div className='col-1'></div>
                </div>
                {array2}
                <div className='d-flex row mt-5 mb-5'>
                    <div className='col-12'>
                        <div className='lead justify-content-center row'>End of Feed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationDay