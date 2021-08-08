import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'

const LocationDay = () => {
    
    const {propsObj, setPropsObj} = useContext(userContext)

    console.log(propsObj.posts)
    

    return (

        <div>
            <p></p>
        </div>
    )
}

export default LocationDay