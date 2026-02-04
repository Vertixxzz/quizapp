const User = require("../models/user.model");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        return res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { username } = req.body;

        const updated = await User.findByIdAndUpdate(
            req.user.id,
            { ...(username ? { username } : {}) },
            { new: true }
        ).select("-password");

        return res.json(updated);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }
};
