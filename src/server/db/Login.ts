import { Query } from "./index";

const login = async (email: string) => Query(`
    select Users.password
    from Users
    where Users.username = ?;
`, [email]);

export default {
    login
}