import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  PrimaryColumn,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 12)
  }
  constructor(email: string, password: string, id?: string) {
    this.email = email
    this.password = password
    if (!id) {
      this.id = uuidv4()
    } else {
      this.id = id
    }
  }
}
