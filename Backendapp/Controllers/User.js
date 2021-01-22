const User= require('../Models/User');


exports.signin=(req,res)=>{
    const reqBody= req.body;
    const email= reqBody.email;
    const password= reqBody.password;
    var user = new User({email:email,password:password});
    user.save().then(response=>res.status(200).json({message:"registered sucessfully",user:response}))
    .catch(err=>res.status(500).json({message:err}));
}
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({ email: email, password: password })
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated: true, user: result })
            }
            else {
                res.status(200).json({ message: "User Not LoggedIn Sucessfully", isAuthenticated: false, user: result })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}