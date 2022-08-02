import express, { json, Router, urlencoded } from 'express';
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"
import productRouter from "./routes/product"
import orderRouter from "./routes/order"
import { AppDataSource } from "./routes/data-source";





// Creating an order
// Getting an order by id
// Getting all orders


const app = express()
config()
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));


app.use("/product", productRouter)
app.use("/order", orderRouter)



app.get("*", (req, res) => {
  res.status(404).json({
    msg: "Erorr 404"
  })
})

app.listen(process.env.PORT, async () => {
  console.log(`listing on ${process.env.PORT} port`);

  try {
    await AppDataSource.initialize()
    console.log("connected to the database");

  } catch (error) {
    console.log("conection Not Valid");
    console.log(error);
  }
})



