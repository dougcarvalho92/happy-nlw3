import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  Unique,
} from "typeorm";
import Orphanage from "./Orphanage";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  level: number;

  @OneToMany(() => Orphanage, (orphanages) => orphanages.user, {
    cascade: ["insert", "update", "remove"],
  })
  @JoinColumn({ name: "user_id" })
  orphanages: Orphanage[];
}
