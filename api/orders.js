import requireBody from "#middleware/requireBody";
import authenticate from "#middleware/getUserFromToken";
import express from "express";
import { orders, products, orders_products } from "../db/schema.sql";

const router = express.Router();
export default router;

router.post(
  "/orders",
  authenticate,
  requireBody(["date"]),

  async (req, res) => {
    const { date } = req.body;
    if (!date) return res.status(400).send("No Date inputed.");

    const newOrder = {
      id: orders.length + 1,
      userId: req.user.id,
      date,
    };
    orders.push(newOrder);
    res.status(201).send(newOrder);
  }
);

router.get(
  "/orders",
  authenticate,
  //Get all orders
  async (req, res) => {
    //res.status(201).send(orders)
    res.send(orders);
  }
);

router.get("/orders/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  const order = orders.find((o) => o.id === Number(id));
  if (!order) {
    return res.status(404).send("There is no order for that product.");
  }

  if (order.userId !== req.user.id) {
    return res.status(403).send("Wrong user.");
  }

  res.send(order);
});

router.post("/orders/:id/products", authenticate, async (req, res) => {
  if (!order) {
    return res.status(404).send("There is no order for that product.");
  }
  if (order.userId !== req.user.id) {
    return res.status(403).send("Wrong user.");
  }
  if (!productId && !quantity) {
    return res.status(400).send("Please put both product id and quantity");
  }

  if (!productId) {
    return res.status(400).send("No product with that id");
  }
});

router.get("/orders/:id/products", authenticate, async (req, res) => {
  const { id } = req.params;

  if (!order) {
    return res.status(404).send("There is no order for that product.");
  }
  if (order.userId !== req.user.id) {
    return res.status(403).send("Wrong user.");
  }
});
