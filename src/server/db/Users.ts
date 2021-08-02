import { Query } from "./index";

const getUserID = async (email: string) => Query(`
    select Users.id
    from Users
    where Users.email = ?
`, [email])

const post = async (name: string, email: string, password: string, profileType: string) => Query(`
    insert into Users (name, email, profileType) values (?, ?, ?)
`, [name, email, password, profileType]);

export default {
    getUserID,
    post
}