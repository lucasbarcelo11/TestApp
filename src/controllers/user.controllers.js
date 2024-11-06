const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
    const user = await User.findAll()
    return res.json(user);
});

const create = catchError(async (req, res) => {
    const user = await User.create(req.body)
    return res.status(201).json(user)
})

module.exports = {
    getAll,
    create
};