const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.USERKEY, (err, payload) => {
        if(err) {
            console.log(req.cookies.usertoken);
            console.log(jwt.decode(req.cookies.usertoken, secret));
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}