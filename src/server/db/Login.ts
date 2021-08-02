import { Query } from "./index";

const login = async (email: string) => Query(`
    select Users.password
    from Users
    where Users.email = ?;
`, [email]);

export default {
    login
}