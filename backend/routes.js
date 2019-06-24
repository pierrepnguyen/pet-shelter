const controllers = require('./controllers');

module.exports = app => {
    app
    .get('/pets/all', controllers.allPets)
    .post('/pets/new', controllers.newPet)
    .delete('/pets/:_id', controllers.removePet)
    .put('/pets/edit', controllers.updatePet)
    .get('/pets/:_id', controllers.findPet)
    .put('/pets', controllers.likePet)
}