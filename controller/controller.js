let users = [];
import {v4 as uuid} from 'uuid'

export const getUsers = (req, res) => {
      res.send(users);
}

export const getUser = (req,res) => {
    const singleUser = users.find((s)=> s.id===req.params.id);
    if(singleUser) return res.send(singleUser);
    else return res.status(250).send("Username or password error");
}

export const getInfo = (req,res) => {
    const singleUser = users.find((s)=> s.id===req.params.id);
    if(singleUser) return res.send(singleUser.status);
    else return res.status(250).send("Username or password error");
}

export const getOthers = (req,res) => {
    const singleUser = users.filter((u)=>u.id!==req.params.id);
    if(singleUser) return res.send(singleUser);
    else return res.status(250).send("Username or password error");
}

export const addUser = (req,res) => {
    const user = req.body
     user.status = req.body.status;
    users.push({...user, id:uuid()});
    res.send("Registration was a success");
}

export const deleteUser = (req,res) => {
    const user = users.filter((u) => u.id === req.params.id);
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send("User deleted successfully!!!!");
}

export const updateUser = (req, res) => {
    const user = users.find((u) => u.id === req.params.id);
    if(user) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.pass = req.body.pass;
        user.status = req.body.status;
    }
    res.send("User updated successfully");
}
