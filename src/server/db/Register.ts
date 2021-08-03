import { Query } from "./index";

const register = async (username: string, email: string, password: string, profileType: string) => Query(`
    insert into users (username, email, password, profileType) values (?, ?, ?, ?)
`, [username, email, password, profileType]);

export default {
    register
}