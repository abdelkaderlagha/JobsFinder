import { Category } from './category';
import { company } from './company';

export class Jobs{

    id:number;
    title:string;
    created_at:string;
    decription:string;
    deadline:string;
    category:Category;
    compnay:company;

    constructor(){}

}