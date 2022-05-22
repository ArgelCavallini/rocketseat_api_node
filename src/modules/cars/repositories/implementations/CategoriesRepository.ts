import { Category } from '../../model/Category';
import { ICategoriesRepository,ICreateCategoryDTO} from '../ICategoriesRepository';

/*
 singleton
  criar apenas uma estancia de uma classe de forma global
*/

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  //singleton pattern
  private static INSTANCE: CategoriesRepository;

  //deixar constructor como privateno quando usar singleton
  private constructor() {
    this.categories = [];
  }

  //responsável por criar uma estancia ou repassar uma já existente
  public static getInstance(): CategoriesRepository{
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
