const City = require('../Models/Location');

exports.getLocation = (req, res) => {
    City.find()
        .then(response => res.status(200).json({ message: 'Cities Fetched Succesfully', cities: response }))
        .catch(err => res.status(500).json({ message: err }))
}
exports.addCityList = (req, res, next) => {
    const name = req.body.name;
    const city_id = req.body.city_id;
    const location_id = req.body.location_id;
    const country_name = req.body.country_name;
    const Cities = new City({ name: name, city_id: city_id, location_id: location_id, country_name: country_name });
    Cities.save().then(result => {
        res.status(200).json({ message: "City Added Sucessfully", city: result })
    }).catch(err => {
        console.log(err)
    })
}