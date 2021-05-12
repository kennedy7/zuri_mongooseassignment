const User = require('../model/user_model');

exports.createUser = async (req, res, next) => {
    try {
        const body = req.body;
        const user = new User({
            name: body.name,
            email: body.email,
            country: body.country,
        });
        await user.save();
        res.json({
            message: "your request was successful",
            user
        })
    } catch (e) {
        res.json(e)
    }
}


exports.updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        User.findById({ _id: id }, async (err, data) => {
            if (err) {
                res.send(err)
            }
            data.name = req.body.name,
                data.email = req.body.email,
                data.country = req.body.country
            await data.save();
            res.json({
                message: 'user updated successfully',
                data
            })

        })
    } catch (error) {
        next(error)
    }

}


exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.json({
            message: "Successfully Committed Murder"
        })
    } catch (error) {
        console.log(error)
    }
}