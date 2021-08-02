import * as mysql from "mysql";
import Posts from "./Posts";
import Login from "./Login";
import Register from "./Register";
import Users from "./Users";

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: 'guest',
    database: 'bandsdatabase',
    port: 3306
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    Posts,
    Login,
    Register,
    Users
}