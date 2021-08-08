import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'


const SinglePost = () => {
    
    const {propsObj, setPropsObj} = useContext(userContext)

    return (
        
        <div>
            <p>workin on it</p>
        </div>
    )
}

export default SinglePost