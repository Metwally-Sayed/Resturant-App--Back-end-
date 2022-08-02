import { Router } from "express";
import { Product } from "../entities/Product"
import { Order } from "../entities/Order";
import { Orderline } from "../entities/Orderline";
import { productType } from "../types";
const router = Router()



router.get("/", async (req, res) => {
  const orders = await Order.find({ relations: { orderline: true } })
  await res.json({ data: orders })

})




router.get('/:id', async (req, res) => {
  try {
    const id = +req.params.id
    const order = await Order.findOne({ where: { id }, relations: { orderline: true } })
    if (!order) {
      return res.status(404).json({ mes: 'order not found' });
    }
    await res.json({ data: order })

  } catch (error) {
    res.status(500).json({ msg: error });

  }
})





router.post("/", async (req, res) => {
  const { firstName, lastName, phoneNumber, city, address, products } = req.body
  try {
    const order = Order.create({
      firstName,
      lastName,
      phoneNumber,
      city,
      address
    });


    await order.save()

    for (let i = 0; i < products.length; i++) {
      const orderline = Orderline.create(
        {
          quantity: products[i].quantity,
          products: products[i].IdOfProduct,
          order,

        }
      )
      orderline.save()
    }




    // products.forEach(async (product: productType) => {

    //   const orderline = Orderline.create({
    //     quantity: product.quantity,
    //     order,
    //     product: product.items
    //   }
    //   )
    //   await orderline.save()
    // });


    res.json({ msg: "ordersaved" })



  } catch (error) {
    console.log(error);

  }


})


export default router