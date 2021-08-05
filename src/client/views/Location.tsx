import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
import '../utils/Calendar.css';

export interface LocationProps { }

const Location = (props: LocationProps) => {

    const { location } = useParams<{ location: string }>();

    const [disabledDates, setDisabledDates] = useState([]);

    const getDaysArray = (start: any, end: any) => {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    const dateArray = getDaysArray(new Date("1970-01-01"), new Date());

    const [date, onChange] = useState(new Date);

    useEffect(() => {
        setDisabledDates(dateArray)
    }, []);

    const [selectedDate, setSelectedDate] = useState<Date>(new Date)
    const [sidebarSelection, setSidebarSelection] = useState<string>('')

    useEffect(() => {
        setSidebarSelection(selectedDate.toLocaleDateString())
    }, [selectedDate]);

    useEffect(() => {
        if (screen.width <= 480) {
            let showMe = document.querySelector('#smallScreen')
            showMe.classList.remove('invisible')
        } 
    });

    return (
        <div>
            <div style={{ margin: "auto" }} className='row pb-2 d-flex flex-row bg-dark text-white'>
                <div style={{ fontSize: "300%" }} className='ps-5 col-12' >Calendar</div>
            </div>
            <div style={{ margin: "auto" }} id='smallScreen' className='row invisible'>
                <div>{sidebarSelection}</div>
            </div>
            <div style={{ margin: "auto" }}  className='row pt-5 pb-5'>
                <div className='d-none d-sm-block col-lg-2 col-md-3 border-end'>
                    <div className="ms-2 card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item pl-2">{sidebarSelection}</li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                            <li className="list-group-item pl-2"></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-10 col-md-9 col-sm-9 col-xs-12'>
                    <Calendar className='react-calendar btn border w-100'
                        tileClassName='text-muted btn border rounded-0 p-2'
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