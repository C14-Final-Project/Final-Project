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

const editUserProfile = async (username: string, email: string, profileName: string, profileBio: string, profileLocation: string, profilePhoto: string, tag1: string, tag2: string, tag3: string, id: string) => Query(`
    UPDATE Users
    SET username = ?,email = ?,profileName = ?,profileBio = ?,profileLocation = ?,profilePhoto = ?,tag1 = ?,tag2 = ?,tag3 = ?
    WHERE Users.id = ?;
`, [username, email, profileName, profileBio, profileLocation, profilePhoto, tag1, tag2, tag3, id])

export default {
    getUserID,
    getUserProfile,
    editUserProfile
}