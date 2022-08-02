import {
  BaseEntity,
  Column, CreateDateColumn, Entity, Generated, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm"
import { Orderline } from "./Orderline"

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: String

  @Column()
  lastName: String

  @Column({ unique: true })
  phoneNumber: Number

  @Column()
  city: String

  @Column()
  address: String

  @Column()
  @Generated("uuid")
  orderNumber: string;

  @Column()
  completed:boolean

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


  @OneToMany(() => Orderline, (orderline) => orderline.order)
  orderline: Orderline[]
}



