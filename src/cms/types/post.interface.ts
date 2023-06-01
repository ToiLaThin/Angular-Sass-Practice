import { StatusEnum } from "./status.enum";

export interface IPost {
    id: number,
    title: string,
    image: string,
    content: string,
    date: Date,
    status: StatusEnum,
    categoryId: number
}

