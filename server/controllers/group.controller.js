const Group = require('../models/group.model');

module.exports.createGroup = (req, res) => {
    Group.create(req.body)
        .then(group => res.json(group))
        .catch(err => res.json(err));
}

module.exports.findGroupById = (req, res) => {
    Group.findOne({_id: req.body.id})
        .then(group => res.json.group)
        .catch(err => res.json(err));
}

module.exports.findGroupsByOwner = (req, res) => {
    Group.find({owner: req.body.owner})
        .then(groups => res.json(groups))
        .catch(err => res.json(err));
}

module.exports.findGroupsByUser = (req, res) => {
    
}