import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/email=:email', async (req, res) => { 
    const email: string = req.params.email;
    if (email) {
      const id = await db.Users.getUserID(email);
      res.json(id[0].id);
    } else {
      console.log('error')
    }
});

router.get('/:username', async (req, res) => { 
  const username: string = req.params.username;
  if (username) {
    const profile = await db.Users.getUserProfile(username)
    res.json(profile)
    console.log(profile)
  } else  {
    console.log('error')
  }
});

export default router;