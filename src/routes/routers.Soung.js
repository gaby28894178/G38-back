const { getAll, getOne, create, update, destroy } = require('../controllers/user.controllers');
const express = require('express');


const soungRouter = express.Router();

soungRouter.route("/")
		.get(getAll)
        .post(create)
soungRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update)

module.exports = soungRouter;