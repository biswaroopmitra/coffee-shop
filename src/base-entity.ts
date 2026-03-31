import { PrimaryKey, Property } from "@mikro-orm/core";
import { Type } from "class-transformer";


export abstract class BaseEntity{
    @PrimaryKey({autoincrement: true, nullable: false})
    id!: number;
    
    @Type(() => Date)
    @Property({onCreate: () => new Date(), nullable: false})
    createdOn?: Date;

    @Type(() => Date)
    @Property({onUpdate: () => new Date(), nullable: false})
    updatedOn?: Date;
}