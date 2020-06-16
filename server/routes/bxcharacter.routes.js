const BXController = require('../controllers/bxcharacter.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/bx", authenticate, BXController.create);
    app.get("/api/bx", authenticate, BXController.findByOwner);
}