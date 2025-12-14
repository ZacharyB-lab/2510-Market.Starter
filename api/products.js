import express from "express";
const router = express.Router();
export default router;

router.get(
  "/:id"

  /* Need to determine conditional statement 
    return res.status(404).send("Invalid product id.");
    */
);

router.get(
  "/:id/orders"

  /* Need to determine conditional statement 
    return res.status(404).send("Invalid product id.");
    */
);
