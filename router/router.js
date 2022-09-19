import express from 'express';
import {updateUser, deleteUser,getUser, addUser, getUsers, getInfo, getOthers} from '../controller/controller.js'

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.get('/other/:id', getOthers);
router.get('/users/:id', getInfo);
router.post('/user', addUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);

export default router;
