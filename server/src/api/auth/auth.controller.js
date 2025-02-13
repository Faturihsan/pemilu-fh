const loginSchema = require("./auth.model");
const authService = require("./auth.service");

const login = async (req, res) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) {
    return res
      .status(400)
      .send({ error: true, message: validation.error.details[0].message });
  }

  try {
    const userResponse = await authService.loginUser(
      req.body.nama,
      req.body.nim,
      req.body.NIK,
      req.body.email,
      req.body.gender,
      req.body.tempat_lahir,
      req.body.tanggal_lahir,
      req.body.angkatan
    );

    res.status(200).json({
      error: false,
      message: "success",
      loginResult: userResponse,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = login;
