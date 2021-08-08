import * as express from "express";
import { ServerSession } from '../utils/ServerSession'

const router = express.Router();

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        res.json(ServerSession.GetUser(req.params.id))
    } else {
        res.send(ServerSession.GetUsers());
    }
});

router.post('/', (req, res) => {
    ServerSession.CreateUser(req.body);
    res.sendStatus(200);
})

router.put('/:id?', (req, res) => {
    ServerSession.UpdateUser(req.params.id, req.body);
    res.sendStatus(200);
})

router.delete('/:id?', (req, res) => {
    ServerSession.DeleteUser(req.params.id);
    res.sendStatus(200);
})

export default router