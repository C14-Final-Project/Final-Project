import { Query } from "./index";

const register = async (name: string, email: string, password: string, profileType: string) => Query(`
    insert into users (name, email, password, profileType) values (?, ?, ?, ?)
`, [name, email, password, profileType]);

export default {
    register
}