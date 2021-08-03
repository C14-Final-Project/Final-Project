import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/email=:email', async (req, res) => { 
    const email: string = req.params.email;
    if (email) {
      const post = await db.Users.getUserID(email);
      res.json(post[0].id);
    } else {
      console.log('error')
    }
});

export default router;