import { Query } from "./index";

const all = async (locationEventName: string) => Query(`
    select Posts.id, Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Users.name, Users.email
    from Posts
    join Users on Posts.userid = Users.id
    where Posts.locationEventName = ?;
`, [locationEventName]);

const one = async (id: any) => Query(`
    select Posts.title, Posts.text, Posts.dayEvent, Posts.timeEvent, Posts.dayPosted, Posts.timePosted, Posts.moneyAmount, Posts.locationEventName, Users.name, Users.email
    from Posts
    join Users on Posts.userid = Users.id
    where Posts.id = ?; 
`, [id]);

const post = async (userid: string, title: string, text: string, locationEventName: string, dayEvent: string, timeEvent: string, dayPosted: string, timePosted: string, moneyAmount: string) => Query(`
    insert into Posts (userid, title, text, locationEventName, dayEvent, timeEvent, dayPosted, timePosted, moneyAmount) values (?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [userid, title, text, locationEventName, dayEvent, timeEvent, dayPosted, timePosted, moneyAmount]);

const destroy = async (id: string) => Query(`
    DELETE FROM Posts WHERE Posts.id = ?;
`, [id]);

export default {
    all,
    one,
    post,
    destroy
}