import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'
import { viewPosts } from '../utils/types'

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