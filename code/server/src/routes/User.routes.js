const express = require('express')
const UserController=require('../controllers/User.controller')

const userRouter = express.Router()

userRouter.route('/:id').get(UserController.getOneUser)
userRouter.route('/').post(UserController.createUser)
module.exports = userRouter