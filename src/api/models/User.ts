import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ObjectId } from 'mongodb';

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