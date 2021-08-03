import { Query } from "./index";

const getUserID = async (email: string) => Query(`
    select Users.id
    from Users
    where Users.email = ?
`, [email])

const getUserProfile = async (username: string) => Query(`
    select Users.id, Users.username, Users.profileName, Users.profileLocation, Users.profileBio, Users.profileType, Users.profilePhoto, Users.popularity, Users.tag1, Users.tag2, Users.tag3
    from Users
    where Users.username = ?
`, [username])

export default {
    getUserID,
    getUserProfile
}