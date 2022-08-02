import {
  BaseEntity,
  Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm"
import { Product } from "./Product";


@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @CreateDateColumn(
    {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP(6)"
    }
  )
  createAt: Date

  @UpdateDateColumn(
    {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP(6)"
    }
  )
  updatedAt: Date;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[]
}