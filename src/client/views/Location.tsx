import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
import '../utils/Calendar.css';
import '../utils/Location.css';

export interface LocationProps { }

const Location = (props: LocationProps) => {

    const { location } = useParams<{ location: string }>();

    const [disabledDates, setDisabledDates] = useState([]);
    const [date, onChange] = useState(new Date);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date)
    const [sidebarSelection, setSidebarSelection] = useState<string>('')
    const [colon, setColon] = useState<string>('')
    const [time, setTime] = useState<string>()
    const [date2, setDate2] = useState<string>()

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
        console.log(monthString)
        setTime(y)
        setDate2(`${yearString}-${monthString}-${dayString}`)
        
        console.log(y)
    };

    useEffect(() => {
        getTime()
    }, []);

    useEffect(() => {
        setDisabledDates(dateArray)
    }, [time]);

    useEffect(() => {
        setSidebarSelection(selectedDate.toLocaleDateString())
        setColon(":")
    }, [selectedDate]);

    useEffect(() => {
        if (screen.width <= 480) {
            let showMe = document.querySelector('#smallScreen')
            showMe.classList.remove('invisible')
        }
    });

    return (
        <div className='custom'>

            <div style={{ margin: "auto" }} className='row pb-2 d-flex flex-row bg-dark text-white'>
                <div style={{ fontSize: "300%" }} className='ps-4 col-12' >Birmingham, Alabama</div>
            </div>

            <div style={{ margin: "auto" }} id='smallScreen' className='row invisible'>
                <div className='bg-dark border border-white br-1 col-12 pb-1 text-white'>{sidebarSelection}{colon}</div>
            </div>
            <div style={{ margin: "auto" }} className='row pt-2 pb-5'>
                <div className='d-none d-sm-block col-lg-2 col-md-3 border-end'>
                    <div className="ms-2 card">
                        <ul className="list-group  list-group-flush">
                            <li className="list-group-item bg-dark text-white pl-2">{sidebarSelection}{colon}</li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                            <li className="list-group-item bg-dark pl-2"></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-10 col-md-9 col-sm-9 col-xs-12'>
                    <Calendar className='react-calendar  bg-dark btn border w-100'
                        tileClassName='btn  border rounded-0 p-2'
                        onClickDay={(value) => setSelectedDate(value)}
                        onChange={onChange}
                        value={date}
                        tileDisabled={({ date, view }) =>
                            (view === 'month') && // Block day tiles only
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