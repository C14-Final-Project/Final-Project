import * as React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



const MakePost = () => {

    const { location } = useParams<{ location: string }>();

    const fontBuddy = {
        fontSize: '16px',
        cursor: 'pointer'
    }

    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '100%',
        width: '100%',
        padding: '0px',
        fontSize: '20px'
    }

    const [show, setShow] = useState(false);
    const [text, setText] = useState(props.text);
    const [id, setID] = useState(props.id);
    const [array, setArray] = useState([])
    const [confirm, setConfirm] = useState(false)
    const [test, setTest] = useState()
    const [update, setUpdate] = useState<string>(props.text)

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost2')
        postBtn.classList.add('text-danger')
        
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost2')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg2')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg2')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink2')
        postBtn.classList.add('text-danger')
        
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink2')
        postBtn.classList.remove('text-danger')
    }

    const newPost = async () => {
        let editPost = {
            text: update,
            name: props.username,
            email: props.nickName,
            edit: '*'
        };
        setArray([...array, editPost]);
        setTest(editPost)
        setConfirm(true)
    }

    useEffect(() => {
        sendPost(props.pageID);
    }, [test])


    const sendPost = async (id) => {
        if (confirm) {
            let res = await fetch(`/api/posts/${location}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(test)
            });
            setConfirm(false);
            if (res.ok) {
                console.log('cool')
            } else {
                console.log('uh oh');
            }
        }
    }

    return(
        <div>
            <div className='row d-flex'>
                <div className='col-2'>
                    <div className=''>
                        <div className='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost2' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>post</div>
                    </div>
                    <div>
                        <div className='border-right lead border-secondary text-right pr-2' id='btnImg2' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>add image</div>
                    </div>
                     <div>
                        <div className='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink2' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>add link</div>
                    </div>
                </div>
                <div className='col-9'>
                    <textarea value={update} style={textBuddy} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setUpdate(e.target.value)} className="p-2" rows={2}></textarea>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default MakePost