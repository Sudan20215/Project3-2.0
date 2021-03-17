const router = require("express").Router();
const { register, login, getUser } = require("../controllers/UserController");
const auth = require("../middleware/auth");

router.post("/register", register);

router.post("/login", login);

router.get("/", auth, getUser);

module.exports = router;
