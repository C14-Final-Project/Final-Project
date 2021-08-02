import * as express from "express";
import db from "../db";

const router = express.Router();

router.get(`/email=:email&password=:password`, async (req, res) => { // /api/blogs/3
    const email: any = req.params.email;
    const checkPass = req.params.password;
    const password = await db.Login.login(email);
    if (password[0].password == checkPass) {
        res.send(true)
        console.log(true)
    } else {
        res.send(false)
        console.log(false)
    }
    
});


export default router