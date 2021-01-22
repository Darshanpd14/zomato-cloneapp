var express= require('express');

const restaurantcontroller= require('../Controllers/Restaurant');
const locationcontroller= require('../Controllers/Location');
const mealtypecontroller=require('../Controllers/Mealtype');
const usercontroller=require('../Controllers/User');
var paymentGatewayController = require('../Controllers/PaymentGateway');

const router= express.Router();

router.get('/restaurant',restaurantcontroller.restaurantById);
router.get('/filter',restaurantcontroller.filterRestaurant);
router.get('/mealtypes',mealtypecontroller.getMealtype);
router.get('/location', locationcontroller.getLocation);
router.get('/restbylocation/:locationid',restaurantcontroller.restaurantByLocationId);
router.get('/getItemsbyrestaurant/:resId', restaurantcontroller.getItemsByRestaurant);
router.post('/signin',usercontroller.signin);
router.get('/login', usercontroller.login);
router.post('/payment', paymentGatewayController.payment);
router.post('/callback', paymentGatewayController.callback);

router.post('/addcitylist', locationcontroller.addCityList);
router.post('/addmealtype', mealtypecontroller.addMealType);
router.post('/addRestaurantList', restaurantcontroller.addRestaurantList);

module.exports= router;