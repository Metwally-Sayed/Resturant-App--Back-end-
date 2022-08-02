import {
  BaseEntity,
  Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm"
import { Order } from "./Order"
import { Product } from "./Product"

@Entity()

export class Orderline extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  createdAt: Date

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  updatedAt: Date

  @ManyToOne(() => Product, (products) => products.orderline)
  products: Product[]

  @ManyToOne(() => Order, (order) => order.orderline)
  order: Order


}