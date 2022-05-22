import { Router } from 'express';

import { SpecificatiosRepository } from '../modules/cars/repositories/implementations/SpecificatiosRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificatiosRepository();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
});

export { specificationsRoutes };
