var userDb = require('./model')

// create and save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can\'t be empty' })
        return
    }
    // new user
    const user = new userDb({
        dept_name: req.body.dept_name,
        course_name: req.body.course_name,
        t_name: req.body.t_name
    })
    // save data in mongodb
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500)({
                message: err.message || 'Something went wrong while saving data'
            })
        })
}

// retrive user(s)
exports.find = (req, res) => {

}