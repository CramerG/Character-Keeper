const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.USERKEY, (err, payload) => {
        if(err) {
            res.status(401).json({verified: false});
        } else {
            console.log("VERIFICATION SUCCESSFUL");
            next();
        }
    });
}