import { Router } from "express";
import { Product } from "../entities/Product"
const router = Router()


router.get("/", async (req, res) => {
  const product = await Product.find()
  res.json({ data: product })
})


export default router