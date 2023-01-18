const express = require('express');
const router = express.Router();

const { FLightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post(
    '/flights',
    FLightMiddlewares.validateCreateFlight,
    FlightController.create);

router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);

module.exports = router;