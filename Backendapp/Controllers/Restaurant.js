const Restaurant = require('../Models/Restaurant');
const Item = require('../Models/Item');

exports.restaurantByLocationId = (req, res) => {
    const locationId = req.params.Id;
    Restaurant.find({ location_id: locationId }) 
    .then(response => res.status(200).json({ message: 'Restaurant Fetched Succesfully', restaurant: response }))
        .catch(err => res.status(500).json({ message: err }))
}

exports.restaurantById = (req, res) => {
    const restaurantId = req.params.Id;
    Restaurant.findById(restaurantId).then(response => {
        res.status(200).json({ message: 'Restaurant Fetched Succesfully', restaurant: response })
    }).catch(err => res.status(500).json({ message: err }))
}

exports.filterRestaurant = (req, res) => {
    const queryParams = req.body;

    const locationId = queryParams.locationId;
    const mealTypeId = queryParams.mealTypeId;
    const cuisineId = queryParams.cusineId;
    const lCost = queryParams.lCost;
    const hCost = queryParams.hCost;
    const sort = queryParams.sort ? queryParams.sort:1;
    const page = queryParams.page ? queryParams.page:1;
    const perpagecount = queryParams.perpagecount ? queryParams.perpagecount:5;

    let start;
    let end;
    start= Number(page* perpagecount)-perpagecount;
    end= Number(page* perpagecount);
    let payload= {};

    if (mealTypeId) {
        payload = {
             mealtype_id: mealTypeId
             }
    }
    if (mealTypeId && locationId) {
        payload = { 
            mealtype_id: mealTypeId,
             location_id: locationId
         }
    }
    if (mealTypeId && lCost && hCost) {
        payload = {
             min_price: { $lt: hCost, $gt: lCost }, 
             mealtype_id: mealTypeId 
            }
    }
    if (mealTypeId && locationId && lCost && hCost) {
        payload = {
             min_price: { $lt: hCost, $gt: lCost },
              mealtype_id: mealTypeId,
               location_id: locationId 
            }
    }
    if (mealTypeId && locationId && cuisineId && lCost && hCost) {
      payload = {
         min_price: { $lt: hCost, $gt: lCost },
            mealtype_id: mealTypeId,
            location_id: locationId,
            cuisine_id: cuisineId
        }
    }
    Restaurant.find(payload).sort({ min_price:sort}).then(result => {
         const count =Math.ceil(result.length/5);
         const pagecountArr=[];
         const resultvalues= result.slice(start,end);
         for(var i=1;i=>count;i++){
             pagecountArr.push(i);
         }
         res.status(200).json({message:"restaurant fecthed sucessfully",restaurant:resultvalues,pagecount:pagecountArr,totalCount: result.length })
         .catch(err =>{
            res.status(500).json({message: err})
         });
    })

    Restaurant.find(payload) .then(response =>{
         res.status(200).json({ message: 'Restaurant Fetched Succesfully', restaurant: response })
        .catch(err =>{
             res.status(500).json({ message: err })
            });
    })
}    
exports.getItemsByRestaurant = (req, res) => {
    const resId = req.params.resId;
    Item.find({ restaurantId: resId }).then(result => {
        res.status(200).json({ message: "Restaurant Items Fetched Sucessfully", itemsList: result })
    }).catch(err => console.log(err));
}

// addRestaurantList function to add restaurants to DB
exports.addRestaurantList = (req, res, next) => {
    const name = req.body.name;
    const address = req.body.address;
    const logo = req.body.logo;
    const Rest = new Restaurant({ name: name, address: address, logo: logo });
    Rest.save().then(result => {
        res.status(200).json({ message: "Restaurant Added Sucessfully", restaurant: result })
    }).catch(err => {
        console.log(err)
    })
}
        