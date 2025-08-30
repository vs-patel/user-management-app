import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, ObjectId } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectId | undefined

    @Column()
    firstName: string | undefined

    @Column()
    lastName: string | undefined

    @Column()
    age: number | undefined

    @CreateDateColumn()
    createdAt: Date | undefined

    @UpdateDateColumn()
    updatedAt: Date | undefined
}