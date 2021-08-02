import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/:locationEventName', async (req, res) => { // /api/blogs/3
  const locationEventName: string = req.params.locationEventName;
  if(locationEventName) {
    const posts = await db.Posts.all(locationEventName);
    console.log(posts)
    res.json(posts);
  } else {
    console.log('keep codin')
  }
  
  
});

router.get('/:locationEventName/:id?', async (req, res) => { // /api/blogs/3
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
    const newUser = await db.Users.post(postObj.name, postObj.email, postObj.password, postObj.profileType);
    await db.Posts.post(postObj.userid, postObj.title, postObj.text, postObj.locationEventName, postObj.dayEvent, postObj.timeEvent, postObj.dayPosted, postObj.timePosted, postObj.moneyAmount);
    res.send("success");
  } catch (error) {
    console.log(error); 
  }
});





interface post {
  id?: string,
  name: string,
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