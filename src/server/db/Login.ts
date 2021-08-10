import { Query } from "./index";

const login = async (username: string) => Query(`
    select Users.password
    from Users
    where Users.username = ?;
`, [username]);

export default {
    login
}