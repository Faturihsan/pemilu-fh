const { createUser } = require("./service.create");

const createUserController = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData.tanggal_lahir) {
            return res.status(400).json({ success: false, message: "tanggal_lahir is required" });
        }

        const result = await createUser(userData);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createUserController };
