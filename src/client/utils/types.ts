export interface nameProps {
    username: string,
    email: string,
    profileType: string,
    auth: boolean,
    invisible: string,
    visible: string,
}

export interface prePost {
    date: string,
}

export interface viewPosts {
    posts: object,
}

export interface newPost {
    userid: number,
    title: string,
    text: string,
    locationEventName: string,
    dayEvent: string,
    timeEvent: string,
    dayPosted: string,
    timePosted: string,
    moneyAmount: string,
}

export interface newUser {
    username: string,
    email: string,
    password: string,
    profileType: string,
}

export interface Context {
    username: string,
    email: string,
    profileType: string,
}