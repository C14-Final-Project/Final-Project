import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/username=:username', async (req, res) => { 
    const username: string = req.params.username;
    if (username) {
      const id = await db.Users.getUserID(username);
      res.json(id[0].id);
    } else {
      console.log('error')
    }
});

router.get('/:username', async (req, res) => { 
  const username: string = req.params.username;
  if (username) {
    const profile = await db.Users.getUserProfile(username)
    res.json(profile[0])
  } else  {
    console.log('error')
  }
});

router.put('/id=:id', async (req, res) => {
  const id: string = req.params.id;
  const editObj: edit = req.body;
  try {
    await db.Users.editUserProfile(editObj.username, editObj.email, editObj.profileName, editObj.profileBio, editObj.profileLocation, editObj.profilePhoto, editObj.tag1, editObj.tag2, editObj.tag3, id);
    res.send("edited successfully");
  } catch (error) {
    console.log(error);
  }
});

interface edit {
  id?: string,
  username: string,
  email: string,
  password: string,
  profileType: string,
  profileName: string,
  profileBio: string,
  profileLocation: string,
  profilePhoto: string,
  tag1: string,
  tag2: string,
  tag3: string
}

export default router;