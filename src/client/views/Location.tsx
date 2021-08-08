import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { prePost } from '../utils/types';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
import '../utils/Calendar.css';
import '../utils/Location.css';

const Location = (props: nameProps) => {

    const { location } = useParams<{ location: string }>();

    const [deconstructedDay, setDeconstructedDay] = useState<string>()
    const [deconstructedMonth, setDeconstructedMonth] = useState<string>()
    const [deconstructedYear, setDeconstructedYear] = useState<string>()
    const [post, setPost] = useState('')
    const [be, setBe] = useState('')
    const [length, setLength] = useState<string>('')
    const [disabledDates, setDisabledDates] = useState([]);
    const [date, onChange] = useState(new Date);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date)
    const [sidebarSelection, setSidebarSelection] = useState<string>('')
    const [colon, setColon] = useState<string>('')
    const [time, setTime] = useState<string>()
    const [date2, setDate2] = useState<string>()
    const [dateTest, onDateTest] = useState(new Date);
    const [sidebarArray, setSidebarArray] = useState([{
        date: ''
    }])

    const hoverMakeEnter = () => {
        let x = document.querySelector('#makeButton')
        x.classList.add('border-white')
    }

    const hoverMakeLeave = () => {
        let x = document.querySelector('#makeButton')
        x.classList.remove('border-white')
    }

    const hoverViewEnter = () => {
        let x = document.querySelector('#viewButton')
        x.classList.add('border-white')
    }

    const hoverViewLeave = () => {
        let x = document.querySelector('#viewButton')
        x.classList.remove('border-white')
    }

    const getDaysArray = (start: any, end: any) => {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    const dateArray = getDaysArray(new Date(`1970-01-01 ${time}`), new Date(`${date2} ${time}`));

    const getTime = () => {
        let x = new Date()
        let y: string = x.toLocaleTimeString()
        let dayNum = (x.getDate() - 1)
        let dayString = dayNum.toString()
        let monthNum = (x.getMonth() + 1)
        let monthString = monthNum.toString()
        let yearNum = x.getFullYear()
        let yearString = yearNum.toString()
        setTime(y)
        setDate2(`${yearString}-${monthString}-${dayString}`)
    };

    const deconstructDate = (decDate) => {
        let x = new Date(decDate)
        let dayNum = (x.getDate())
        let dayString = dayNum.toString()
        let monthNum = (x.getMonth() + 1)
        let monthString = monthNum.toString()
        let yearNum = x.getFullYear()
        let yearString = yearNum.toString()
        setDeconstructedDay(`${dayString}`)
        setDeconstructedMonth(`${monthString}`)
        setDeconstructedYear(`${yearString}`)
    };

    const datesToAddContentTo = ['Wed Sep 15 2021', 'Thu Sep 16 2021', 'Sat Aug 07 2021', 'Fri Aug 06 2021', 'Fri Aug 06 2021', 'Fri Aug 06 2021', dateTest.toDateString(), dateTest.toDateString()];

    const bruh = ({ date, view }) => view === 'month' && date.toDateString() === datesToAddContentTo.find(dDate => dDate == date.toDateString()) ? <div>🔥</div> : null

    const bruhFunc = (value: Date) => {
        if (value.toDateString() === datesToAddContentTo.find(dDate => dDate == value.toDateString())) {
            setSidebarArray([{
                date: ''
            }])
            setSelectedDate(value)
            let postArray = []
            for (let i = 0; i < datesToAddContentTo.length; i++) {
                if (datesToAddContentTo[i] == value.toDateString()) {
                    let post = {
                        date: value.toDateString()
                    }
                    postArray.push(post)
                    setSidebarArray([...sidebarArray, post])
                    let x: number = postArray.length
                    let y: string = x.toString()
                    setLength(y)
                }
            }
        } else {
            setLength('0')
            setSelectedDate(value)
        }
    }

    useEffect(() => {
        getTime()
    }, []);

    useEffect(() => {
        setDisabledDates(dateArray)
    }, [time]);

    useEffect(() => {
        setSidebarSelection(selectedDate.toLocaleDateString())
        setColon(":")
        bruhFunc(selectedDate)
        deconstructDate(selectedDate)
    }, [selectedDate]);

    useEffect(() => {
        if (screen.width <= 480) {
            let showMe = document.querySelector('#smallScreen')
            showMe.classList.remove('invisible')
        }
    });

    useEffect(() => {
        if (length == '1') {
            setBe('is')
            setPost('post')    
        } else {
            setBe('are')
            setPost('posts')
        }
    }, [length]);

    return (
        <div className='custom'>

            <div style={{ margin: "auto" }} className='row pb-2 d-flex flex-row bg-dark text-white'>
                <div style={{ fontSize: "300%" }} className='ps-4 col-12' >Birmingham, Alabama</div>
            </div>

            <div style={{ margin: "auto" }} id='smallScreen' className='row invisible'>
                <div className='bg-dark border border-white br-1 col-12 pb-1 text-white'>{sidebarSelection}{colon}</div>
            </div>
            <div style={{ margin: "auto" }} className='row pt-2 pb-5'>
                <div className='d-none d-sm-block col-lg-2 col-md-3 '>
                    <div className="ms-2 card updateCard">
                        <ul className="list-group  list-group-flush">
                            <li className="list-group-item bg-dark text-white pl-2">{sidebarSelection}{colon}</li>
                            <li className="list-group-item bg-dark text-white pl-2">There {be} {length} {post} on {sidebarSelection}!</li>
                            <li className="list-group-item bg-dark pl-2">{props.username}</li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"><Link to={`/${location}/${deconstructedMonth}-${deconstructedDay}-${deconstructedYear}/post`}><button id='makeButton' onMouseEnter={() => hoverMakeEnter()} onMouseLeave={() => hoverMakeLeave()} type='button' className='btn text-white ps-2 pe-2 btn-dark'>Make Post  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆</button></Link></li>
                            <li className="list-group-item bg-dark pl-2"><Link to={`/${location}/${sidebarSelection}`}><button id='viewButton' type='button' onMouseEnter={() => hoverViewEnter()} onMouseLeave={() => hoverViewLeave()} className='btn text-white ps-2 pe-2 btn-dark'>View Posts  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆</button></Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-10 col-md-9 col-sm-9 col-xs-12'>
                    <Calendar className='react-calendar  bg-dark btn border w-100'
                        tileClassName='btn  border rounded-0 p-2'
                        onClickDay={(value) => bruhFunc(value)}
                        onChange={onChange}
                        value={date}
                        tileContent={bruh}
                        tileDisabled={({ date, view }) =>
                            (view === 'month') &&
                            disabledDates.some(disabledDate =>
                                date.getFullYear() === disabledDate.getFullYear() &&
                                date.getMonth() === disabledDate.getMonth() &&
                                date.getDate() === disabledDate.getDate()
                            )}
                    />
                </div>
                <div className='col-1'></div>
            </div>

        </div>
    )
};

export default Location