import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { prePost } from '../utils/types';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
import '../utils/Calendar.css';
import '../utils/Location.css';
import { userContext } from '../utils/userContext'
import UserProfile from '../../server/utils/Session';




const Location = () => {

    const { propsObj, setPropsObj } = useContext(userContext)
    const { locationEventName } = useParams<{ locationEventName: string }>();

    const [lineup, setLineup] = useState([])
    const [email, setEmail] = useState(propsObj.email)
    const [username, setUsername] = useState(propsObj.username)
    const [profileType, setProfileType] = useState<string>(propsObj.profileType)
    const [header, setHeader] = useState(false)
    const [datesToAddContentTo, setDatesToAddContentTo] = useState([])
    const [calendarObject, setCalendarObject] = useState({
        display: [],
        posts: []
    })
    const [array, setArray] = useState([])
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

    const [postsObjState, setPostsObjState] = useState({
        username: username,
        email: email,
        profileType: profileType,
        auth: true,
        invisible: '',
        invisible2: 'invisible'
        posts: calendarObject.posts
    })

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
        setPostsObjState({
            username: username,
            email: email,
            profileType: profileType,
            auth: true,
            invisible: '',
            invisible2: 'invisible',
            posts: lineup,
        })
        console.log(calendarObject.posts)
        console.log(lineup)
        setPropsObj(postsObjState)


    }

    const hoverViewLeave = () => {
        let x = document.querySelector('#viewButton')
        x.classList.remove('border-white')
    }

    const getPosts = async () => {
        try {
            const res = await fetch(`/api/posts/${locationEventName}`);
            const posts = await res.json();
            setArray(posts);
            console.log(posts)
        } catch (error) {
            console.log(error);
        }
    }

    const getDaysArray = (start: any, end: any) => {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    const dateArray = getDaysArray(new Date(`1971-01-01 ${time}`), new Date(`${date2} ${time}`));

    const dateArray2: Date[] = getDaysArray(new Date(`2016-01-01 ${time}`), new Date(`${date2} ${time}`));

    const getTime = () => {
        let x = new Date()
        let y: string = x.toTimeString()
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

    const checkExpiredDates = () => {
        let displayDateArray = []
        let objArray = []
        let now = new Date(`${date2} ${time}`)
        for (let i = 0; i < array.length; i++) {
            let postObject = array[i]
            let checkedDate: Date = new Date(`${postObject.dayEvent} ${time}`)
            if (checkedDate.valueOf() > now.valueOf()) {
                let x = {
                    dateSortValue: checkedDate.valueOf(),
                    idk: new Date(checkedDate),
                    dayEvent: postObject.dayEvent,
                    title: postObject.title,
                    moneyAmount: postObject.moneyAmount,
                }
                displayDateArray.push(checkedDate.toDateString())
                objArray.push(x)
            } else {
                //future use?
            }
        }
        return ({
            display: displayDateArray,
            posts: objArray
        })
    }

    const bruh = ({ date, view }) => view === 'month' && date.toDateString() === datesToAddContentTo.find(dDate => dDate == date.toDateString()) ? <div className='p-0 highlight customTile'>🔥</div> : null

    const bruhFunc = (value: Date) => {
        setSidebarArray(datesToAddContentTo)
        if (value.toDateString() === datesToAddContentTo.find(dDate => dDate == value.toDateString())) {
            setSelectedDate(value)
            let postArray = []
            for (let i = 0; i < datesToAddContentTo.length; i++) {
                if (datesToAddContentTo[i] == value.toDateString()) {
                    let post = {
                        date: value.toDateString()
                    }
                    postArray.push(post)
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

    const createPostsLineup = () => {
        let arr = []
        let selectedDatePosts = calendarObject.posts
        for(let i = 0; i < selectedDatePosts.length; i++) {
            if (selectedDatePosts[i].dayEvent == date.toDateString()){
                let x = selectedDatePosts[i]
                arr.push(x)
            }
        }
        return arr
    }

    useEffect(() => {
        getTime();
        getPosts();
        setHeader(false)
        console.log(UserProfile.getName())
    }, []);

    useEffect(() => {
        setDisabledDates(dateArray)
    }, [time]);

    useEffect(() => {
        setLineup(createPostsLineup())
    }, [date]);

    useEffect(() => {
        setCalendarObject(checkExpiredDates())
    }, [array]);

    useEffect(() => {
        setDatesToAddContentTo(calendarObject.display)
    }, [calendarObject]);

    useEffect(() => {
        if (!header) {
            setSidebarSelection('Choose a date:')
            setHeader(true)
        } else {
            setSidebarSelection(selectedDate.toDateString())
            setColon(":")
            bruhFunc(selectedDate)
            deconstructDate(selectedDate)
        }
    }, [selectedDate]);

    useEffect(() => {
        if (screen.width <= 480) {
            let showMe = document.querySelector('#smallScreen')
            showMe.classList.remove('invisible')
        }
    }, [date]);

    useEffect(() => {
        if (header) {
            if (length == '1') {
                setBe('is')
                setPost('post')
            } else {
                setBe('are')
                setPost('posts')
            }
        }
    }, [length]);

    return (
        <div className='custom'>

            <div style={{ margin: "auto" }} className='row pb-2 d-flex flex-row bg-dark text-white'>
                <div style={{ fontSize: "300%" }} className='ps-4 col-12' >{locationEventName}</div>
            </div>
          </div>
          <div style={{ margin: "auto" }} className="row pt-2 pb-5">
            <div className="d-none d-sm-block col-lg-2 col-md-3 ">
              <div className="ms-2 card updateCard">
                <ul className="list-group  list-group-flush">
                  <li className="list-group-item bg-dark text-white pl-2">
                    {sidebarSelection}
                    {colon}
                  </li>
                  <li className="list-group-item bg-dark text-white pl-2">
                    There {be} {length} {post} on {sidebarSelection}!
                  </li>
                  <li className="list-group-item bg-dark pl-2">
                    {props.username}
                  </li>
                  <li className="list-group-item bg-dark pl-2"></li>
                  <li className="list-group-item bg-dark pl-2"></li>
                  <li className="list-group-item bg-dark pl-2"></li>
                  <li className="list-group-item bg-dark pl-2"></li>
                  <li className="list-group-item bg-dark pl-2">
                    <Link
                      to={`/${location}/${deconstructedMonth}-${deconstructedDay}-${deconstructedYear}/post`}
                    >
                      <button
                        id="makeButton"
                        onMouseEnter={() => hoverMakeEnter()}
                        onMouseLeave={() => hoverMakeLeave()}
                        type="button"
                        className="btn text-white ps-2 pe-2 btn-dark"
                      >
                        Make Post ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆
                      </button>
                    </Link>
                  </li>
                  <li className="list-group-item bg-dark pl-2">
                    <Link to={`/${location}/${sidebarSelection}`}>
                      <button
                        id="viewButton"
                        type="button"
                        onMouseEnter={() => hoverViewEnter()}
                        onMouseLeave={() => hoverViewLeave()}
                        className="btn text-white ps-2 pe-2 btn-dark"
                      >
                        View Posts ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ margin: "auto" }} className='row pt-2 pb-5'>
                <div className='d-none d-sm-block col-lg-2 col-md-3 border-end'>
                    <div className="ms-2 card">
                        <ul className="list-group  list-group-flush">
                            <li className="list-group-item bg-dark text-white pl-2">{sidebarSelection}{colon}</li>
                            <li className="list-group-item bg-dark text-white pl-2">{length} {post}</li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark  pl-2"><Link to={`/${locationEventName}/${deconstructedMonth}-${deconstructedDay}-${deconstructedYear}/post`}><button id='makeButton' onMouseEnter={() => hoverMakeEnter()} onMouseLeave={() => hoverMakeLeave()} type='button' className='btn text-white ps-2 pe-2 btn-dark'>Make Post  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆</button></Link></li>
                            <li className="list-group-item bg-dark pl-2"><Link to={`/${locationEventName}/${sidebarSelection}`}><button id='viewButton' type='button' onMouseEnter={() => hoverViewEnter()} onMouseLeave={() => hoverViewLeave()} className='btn text-white ps-2 pe-2 btn-dark'>View Posts  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎🡆</button></Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-10 col-md-9 col-sm-9 col-xs-12'>
                    <Calendar className='react-calendar  bg-dark btn border w-100'
                        tileClassName='btn border rounded-0 p-3'
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
                            )
                        }
                    />
                </div>
                <div className='col-1'></div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
};

export default Location