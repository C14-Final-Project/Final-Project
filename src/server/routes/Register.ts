import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res) => {
  res.sendStatus(200)
})

router.post('/', async (req, res) => {
  const registerObj: register = req.body;
  try {
    await db.Register.register(registerObj.username, registerObj.email, registerObj.password, registerObj.profileType);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

interface register {
  username: string, 
  email: string,
  password: string,
  profileType: string
}

export default router