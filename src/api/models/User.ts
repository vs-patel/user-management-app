import { Entity, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    public id: number | undefined

    @Column()
    firstName: string | undefined

    @Column()
    lastName: string | undefined

    @Column()
    age: number | undefined
}