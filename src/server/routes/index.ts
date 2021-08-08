import * as express from "express";
import PostsRouter from "./Posts";
import RegisterRouter from "./Register";
import LoginRouter from "./Login";
import UsersRouter from "./Users"
import SessionRouter from "./ServerSession"

const router = express.Router();

router.use('/posts', PostsRouter)
router.use('/register', RegisterRouter)
router.use('/login', LoginRouter)
router.use('/users', UsersRouter)
router.use('/session', SessionRouter)

export default router