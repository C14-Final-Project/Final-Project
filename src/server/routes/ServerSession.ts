import * as express from "express";
import { ServerSession }  from '../utils/ServerSession'

const router = express.Router();

router.get('/:id?', (req, res) => { // /api/users/3
  const id: string = req.params.id;

  if (id) {
    res.json(ServerSession.GetUser(id));
  } else {
    const users = ServerSession.GetUsers();
    let userArr: user[] = []

    Object.keys(users).map(key => userArr.push(
      {
        id: key,
        username: users[key].username,
      }
    ));

    userArr.pop(); // eliminate nextid property 

    res.json(userArr);
  }
});

router.post('/', (req, res) => {
  const userObj: user = req.body;

  ServerSession.CreateUser(userObj);

  res.send("success");
});

//mandatory id param to tell the server which user to update
router.put('/:id', (req, res) => {
  const id: string = req.params.id;
  const userObj: user = req.body;

  ServerSession.UpdateUser(id, userObj);

  res.send("edited successfully");
});

router.delete('/:id', (req, res) => {
  const id: string = req.params.id;

  ServerSession.DeleteUser(id);

  res.send("deleted successfully");
});

interface user {
  id?: string,
  username: string,
}

export default router