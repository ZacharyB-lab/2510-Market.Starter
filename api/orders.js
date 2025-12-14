import requireBody from "#middleware/requireBody";
import express from "express";
const router = express.Router();
export default router;
import requireBody from "#middleware/requireBody";
import token from users.js


router.post(
  "/orders",
  requireBody(["date"]),

  async (req, res) => {
    const { date } = req.body;
    if (!date) return res.status(400).send("No Date inputed.");
    if (!token) return res.status(401).send("Unauthorized Error")
    res.status(201).
  }
);

router.get(
    "/orders",
    //Get all orders
    async (req, res) => {
        if (!token) return res.status(401).send("Unauthorized Error")
        //res.status(201).send(orders)
        res.send(orders);
}
);

router.get(
    "/orders/:id",
    async (params) => {
        if (/*no order*/) return res.status(404).send("There is no order for that product.")
        if (/*wrong user*/) return res.status(403).send("Wrong user.")
        if (!token) return res.status(401).send("Unauthorized Error")
    }

)

router.post(
    "/orders/:id/products",
    async (params) => {
        if (/*no order*/) return res.status(404).send("There is no order for that product.")
        if (/*wrong user*/) return res.status(403).send("Wrong user.")
        if (!productId && !quantity) return res.status(400).send("Please put both product id and quantity")
        if (!productId) return res.status(400).send("No product with that id")
       if (!token) return res.status(401).send("Unauthorized Error")    
    }

);

router.get(
    "/orders/:id/products",
    async (params) => {
        if (/*no order*/) return res.status(404).send("There is no order for that product.")
        if (/*wrong user*/) return res.status(403).send("Wrong user.")
       if (!token) return res.status(401).send("Unauthorized Error")
    }
);
