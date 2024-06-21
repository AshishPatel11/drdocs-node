import express from "express";
import { signIn, signUp } from './auth.controller.js'

const router = express.Router()

router.post('/sign-up', signUp)
router.get('/sign-in', signIn)
export default router;