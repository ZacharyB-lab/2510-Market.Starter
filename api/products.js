import express from "express";
const router = express.Router();
export default router;
import token from users.js

router.get(
    "/products"
    //send all products
);

router.get(
  "products/:id"

  /* Need to determine conditional statement 
    return res.status(404).send("Invalid product id.");
    */
);

router.get(
  "products/:id/orders",

  /* Need to determine conditional statement 
    return res.status(404).send("Invalid product id.");
    */
   if (!token) return res.status(401).send("Unauthorized Error")
);
