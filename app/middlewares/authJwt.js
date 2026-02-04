const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/auth.config");

exports.verifyToken = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        if (!header) return res.status(401).json({ message: "No Authorization header" });

        const [type, token] = header.split(" ");
        if (type !== "Bearer" || !token) {
            return res.status(401).json({ message: "Invalid Authorization format" });
        }

        const payload = jwt.verify(token, jwtSecret);
        req.user = payload; // { id, role }
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
