import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/:locationEventName/:id?', async (req, res) => { 
  const id: string = req.params.id;
  const locationEventName: string = req.params.locationEventName;
  if (id) {
    const post = await db.Posts.one(id);
    res.json(post[0]);
  } else {
    const posts = await db.Posts.all(locationEventName);
    res.json(posts);
  }
});

router.post('/:locationEventName', async (req, res) => {
  const postObj: post = req.body;
  try {
    await db.Posts.post(postObj.userid, postObj.title, postObj.text, postObj.locationEventName, postObj.dayEvent, postObj.timeEvent, postObj.dayPosted, postObj.timePosted, postObj.moneyAmount);
    res.send("success");
  } catch (error) {
    console.log(error); 
  }
});

router.put('/:locationEventName/:id', async (req, res) => {
  const id: string = req.params.id;
  const postObj: post = req.body;
  try {
    await db.Posts.put(id, postObj.title, postObj.text, postObj.locationEventName, postObj.dayEvent, postObj.timeEvent, postObj.moneyAmount);
    res.send("edited successfully");
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:locationEventName/:id?', async (req, res) => {
  const id: string = req.params.id;
  try {
    await db.Posts.destroy(id);
    res.send("deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

interface post {
  id?: string,
  username: string,
  email: string,
  password: string,
  profileType: string,
  userid: string,
  title: string,
  text: string,
  locationEventName: string,
  dayEvent: string,
  timeEvent: string,
  dayPosted: string,
  timePosted: string,
  moneyAmount: string, 
}

export default router