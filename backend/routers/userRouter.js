import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

// creating user router object
const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        // command to erase all users : 
        // await User.remove({});
        const createdUsers = await User.insertMany(data.users);
        res.send({createdUsers});
    })
)
export default userRouter;