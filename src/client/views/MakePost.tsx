import * as React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { newPost } from '../utils/types';
import { nameProps } from '../utils/types';



const MakePost = (props: nameProps) => {

    const { location } = useParams<{ location: string }>();
    const { sidebarSelection } = useParams<{ sidebarSelection: string }>();

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

    const [hourEvent, setHourEvent] = useState<string>()
    const [minEvent, setMinEvent] = useState<string>()
    const [ampm, setAMPM] = useState<string>()
    const [email, setEmail] = useState('2@test.com')
    const [array, setArray] = useState([])
    const [confirm, setConfirm] = useState(false)
    const [userid, setUserid] = useState<number>()
    const [title, setTitle] = useState<string>()
    const [text, setText] = useState<string>()
    const [locationEventName, setLocationEventName] = useState<string>(location)
    const [dayEvent, setDayEvent] = useState<string>()
    const [timeEvent, setTimeEvent] = useState<string>()
    const [dayPosted, setDayPosted] = useState<string>()
    const [timePosted, setTimePosted] = useState<string>()
    const [moneyAmount, setMoneyAmount] = useState<string>()
    const [prePost, setPrePost] = useState<newPost>({
        userid: userid,
        title: ',',
        text: '',
        locationEventName: '',
        dayEvent: '',
        timeEvent: '',
        dayPosted: '',
        timePosted: '',
        moneyAmount: ''
    });

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/users/email=${email}`);
            let getUserid = await res.json();
            setUserid(getUserid);
            let preDateString = new Date(sidebarSelection)
            let dateString = preDateString.toDateString();
            setDayEvent(dateString)
        })();
    }, []);

    const newPost = async () => {
        let date = new Date()
        let newPost: newPost = {
            userid: userid,
            title: title,
            text: text,
            locationEventName: locationEventName,
            dayEvent: dayEvent,
            timeEvent: (hourEvent + ":" + minEvent + ' ' + ampm),
            dayPosted: date.toDateString(),
            timePosted: date.toTimeString(),
            moneyAmount: moneyAmount,
        };
        setArray([...array, newPost]);
        setPrePost(newPost)
        setConfirm(true)
    }

    useEffect(() => {
        sendPost();
    }, [prePost])


    const sendPost = async () => {
        if (confirm) {
            let res = await fetch(`/api/posts/${location}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(prePost)
            });
            setConfirm(false);
            if (res.ok) {
                console.log('cool')
            } else {
                console.log('uh oh');
            }
        }
    }

    return (
        <div>
            <div style={{ margin: "auto" }} className='row pb-2 bg-dark text-white'>
                <div style={{ fontSize: "300%" }} className='ps-4 col-12' >New Post</div>
            </div>
            <div style={{ margin: "auto" }} className='row mt-5 me-5 ms-5'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
            <div style={{ margin: "auto" }} className='row mt-2 mb-4 me-5 ms-5'>
                <div className='col-2'>
                </div>
                <div className='col-8'>
                    <div className="input-group">
                        <div style={{ marginRight: "0" }} className="rounded-top ms-0 rounded-0 input-group-text">Post text</div>
                        <textarea value={text} style={textBuddy} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} className="form-control rounded-end rounded-start p-2" rows={3}></textarea>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
            <div style={{ margin: "auto" }} className='row mt-2 mb-5 me-5 ms-5'>
                <div className='col-2'></div>
                <div className='col-8'>

                    <div className="input-group mb-3">
                        <input value='Birmingham, Alabama' type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" disabled />
                        <span className="input-group-text" id="basic-addon2">Area</span>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Day</span>
                                <input value={dayEvent} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" disabled />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Time</span>
                                <input placeholder="Hour" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHourEvent(e.target.value)} value={timeEvent} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text">:</span>
                                <input placeholder="Min" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinEvent(e.target.value)} value={timeEvent} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAMPM(e.target.value)} value={ampm} className="rounded-end custom-select" id="inputGroupSelect03">
                                    <option value="PM" selected>PM</option>
                                    <option value="AM">AM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoneyAmount(e.target.value)} value={moneyAmount} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                        <button style={{ height: "75%" }} type="button" onClick={() => newPost()} className='btn btn-light col-6 btn-outline-dark border'>Submit Post</button>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}

export default MakePost