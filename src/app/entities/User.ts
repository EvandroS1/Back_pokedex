import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
    id:string

    @Column('varchar', {length: 100, nullable: false})
    name: string 
    
    @Column('varchar', {length: 100, nullable: false})
    password: string 
    
    @Column('varchar', {length: 100, nullable: false})
    email: string

    @Column('boolean')
    sexo: boolean
    
    @Column('varchar')
    celphone: string

    @CreateDateColumn()
    created_at: Date;
}
export default User;