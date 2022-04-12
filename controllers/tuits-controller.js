import posts from "./tuits.js";
import tuitsDao from "./tuits-dao.js";

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.sendStatus(status);
}

export default tuitsController;