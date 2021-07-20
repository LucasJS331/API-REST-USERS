const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController")
const auth = require("../middleware/admin-midleware");

//user routes

router.post("/user", UserController.create);
router.get("/users", auth, UserController.findAll);
router.get("/user/:id", auth, UserController.findOne);
router.put("/user/:id", auth, UserController.edit);
router.delete("/user/:id", auth, UserController.remove);
router.post("/recover", auth, UserController.recoverPassword);
router.post("/changePassword", UserController.changePassword);
router.post("/auth", UserController.login);



module.exports = router;