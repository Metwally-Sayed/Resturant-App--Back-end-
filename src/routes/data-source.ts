import { DataSource } from "typeorm";
import "reflect-metadata"
import { config } from "dotenv";
import { Category } from "../entities/Category";
import { Order } from "../entities/Order";
import { Orderline } from "../entities/Orderline";
import { Product } from "../entities/Product";




config()
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.postgres,
  password: process.env.PGPASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Category, Order, Orderline, Product],
  migrations: ["migrations/*.ts"],
  subscribers: [],


});