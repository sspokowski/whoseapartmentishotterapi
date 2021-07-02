import express from 'express';
import ApartmentController from '../controllers/apartmentController.js';

const router = express.Router();

router.get('/', (request, response) => {
  response.send('Welcome to the whose apartment is hotter dot com exprience!');
});

router.get('/apartments', async (request, response) => {
  await ApartmentController.getHottestApartment(request, response);
});

export default router;