const BXCharacter = require('../models/bxcharacter.model');
const jwt = require('jsonwebtoken');

module.exports.create = (req, res) => {
    const ownerID = jwt.decode(req.cookies.usertoken, process.env.USERKEY).id;
    const char = {
        owner: ownerID,
        ...req.body
    };
    BXCharacter.create(char)
        .then(character => {
            res.json({msg: "creation success", character: character});
        })
        .catch(err => res.json({error: err}));
}

module.exports.findByOwner = (req, res) => {
    const ownerID = jwt.decode(req.cookies.usertoken, process.env.USERKEY).id;
    BXCharacter.find({owner: ownerID})
        .then(characters => res.json(characters))
        .catch(err => res.json({error: err}));
}
module.exports.findById = (req, res) => {
    BXCharacter.find({_id: req.params.id})
        .then(char => res.json({character: char}))
        .catch(err => res.json({error: err}));
}

module.exports.updateCharacter = (req, res) => {
    BXCharacter.findByIdAndUpdate({_id: req.body.id}, req.body.character, {new: true})
        .then(newCharacter => res.json(newCharacter))
        .catch(err => res.json({error: err}));
}