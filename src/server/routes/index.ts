import * as express from "express";
import PostsRouter from "./Posts";
import RegisterRouter from "./Register";
import LoginRouter from "./Login";
import UsersRouter from "./Users"

const router = express.Router();

router.use('/posts', PostsRouter)
router.use('/register', RegisterRouter)
router.use('/login', LoginRouter)
router.use('/users', UsersRouter)

export default router