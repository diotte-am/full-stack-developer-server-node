import people from './users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);

}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type );
}

const findUserByIdHelper = (userId) => {
    return users.find(user => user._id === userId );
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

const findUserById = (req, res) => {
        const userId = req.params.uid;
        if(userId) {
            res.json(findUserByIdHelper(userId));
            return
    }
    res.json(users);
}

export default userController;