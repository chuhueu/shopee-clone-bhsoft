import {
  createBrand,
  getBrand,
  getBrandById,
} from "../controllers/brandController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createBrand).get(getBrand);
//GET BY ID AND DELETE
router.route("/").get(getBrandById);

module.exports = router;