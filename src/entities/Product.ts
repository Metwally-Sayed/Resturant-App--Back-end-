import {
  BaseEntity,
  Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm"
import { Category } from "./Category";
import { Order } from "./Order";
import { Orderline } from "./Orderline";


@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  img: string


  @Column()
  popular: boolean

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",

  })
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category

  @OneToMany(() => Orderline, (orderline) => orderline.products)
  orderline: Orderline[]





}