import * as express from "express";
import db from "../db";

const router = express.Router();

router.get(`/username=:username&password=:password`, async (req, res) => { 
    const username: any = req.params.username;
    const checkPass = req.params.password;
    const password = await db.Login.login(username);
    if (password[0].password == checkPass) {
        res.send(true)
        console.log(true)
    } else {
        res.send(false)
        console.log(false)
    }   
});

export default router