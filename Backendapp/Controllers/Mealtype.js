const Mealtype = require('../Models/Mealtype');

exports.getMealtype = (req, res) => {
    Mealtype.find()
        .then(response => res.status(200).json({ message: 'MealTypes Fetched Succesfully', mealtypes: response }))
        .catch(err => res.status(500).json({ message: err }))
}
exports.addMealType = (req, res, next) => {
    const name = req.body.name;
    const content = req.body.content;
    const meal_type = req.body.meal_type;

    const MT = new MealType({ name: name, content: content, meal_type: meal_type });
    MT.save().then(result => {
        res.status(200).json({ message: "MealType Added Sucessfully", mealtype: result })
    }).catch(err => {
        console.log(err)
    })
}