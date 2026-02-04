module.exports = {
    jwtSecret: process.env.JWT_SECRET || "wowsupersecretomggg",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
};
