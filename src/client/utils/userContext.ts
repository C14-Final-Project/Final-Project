import { createContext } from "react";
import { nameProps } from './types'

const propsTest: nameProps = {
    username: 'test',
    email: 'test',
    profileType: 'test',
    auth: true
};

export const userContext = createContext(null)