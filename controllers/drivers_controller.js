const Driver = require('../models/driver');

module.exports = {

    greeting(req, res){
        res.send({hi: 'there'})
    },

    index(req, res){

        const {lng, lat} = req.query;

        Driver.geoNear(
            {type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)]},
            {spherical: true, maxDistance: 200000}
        )
            .then(drivers => res.send(drivers))
    },

    create(req, res){

        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver => res.send(driver))

    },

    edit(req, res){

        const driverId = req.params.id;

        const driverProps = req.body;

        Driver.findByIdAndUpdate({_id: driverId}, driverProps)
            .then(() => Driver.findById({_id: driverId}))
            .then(driver => res.send(driver))
    },

    delete(req, res){
        const driverId = req.params.id;
        Driver.findByIdAndRemove({_id: driverId})
            .then(driver => res.status(204).send(driver))
    }
};