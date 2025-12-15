import express from "express";
const router = express.Router();
export default router;
import authenticate from "#middleware/getUserFromToken";
//import product_id from orders.js

router.get(
  "/products",
  //send all products
  async (req, res) => {
    res.send(products);
  }
);

router.get("products/:id", async (req, res) => {
  const { id } = req.params;
  /* Need to determine conditional statement 
  const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return res.status(404).send("Invalid product id.");
    }
    */
  res.send(product);
});

router.get("products/:id/orders", authenticate, (req, res) => {
  //const {id} = req, params;

  //const product = products.find(p => p.id === Number(id));

  /* Need to determine conditional statement */
  if (!product) return res.status(404).send("Invalid product id.");
  if (!authenticate) return res.status(401).send("Unauthorized Error");
});
