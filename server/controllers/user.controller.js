const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
};

module.exports.findAllUsers = (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch( err => res.json(err));
};

module.exports.login = async(req, res) => {
    var user;
    try {
        user = await User.findOne( { email: req.body.email } );
        if( user === null ) {
            return res.sendStatus(400);
        }
    } catch(err) {
        console.log(err);
    }

    try{
        const correctPassword = await bcrypt.compare(req.body.password, user.password); 

    if ( !correctPassword ) {
        return res.sendStatus(400);
    }
    } catch(err) {
        console.log(err);
    }

    const userToken = jwt.sign({
        id: user._id
    }, process.env.USERKEY);

    res
        .cookie("usertoken", userToken, process.env.USERKEY, {httpOnly: true})
        .json({msg: "Login success"});
}

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
}
