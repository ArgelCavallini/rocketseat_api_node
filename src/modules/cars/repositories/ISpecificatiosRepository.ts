import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificatiosRepository{
    findByName(name:string): Specification;
    create({name, description}:ICreateSpecificationDTO): void;
}

export { ISpecificatiosRepository,ICreateSpecificationDTO};