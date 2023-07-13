// moved controllers to controller file then referenced here
const jokeController = require('../controllers/joke.controller')


module.exports = app => {
    app.get("/api", jokeController.hello);    
    app.get('/api/jokes', jokeController.allJokes);    
    app.get('/api/jokes/random', jokeController.randomJoke);    
    app.get('/api/jokes/:id', jokeController.oneJoke);
    app.post('/api/jokes', jokeController.newJoke);    
    app.patch('/api/jokes/:id', jokeController.updateJoke);    
    app.delete('/api/jokes/:id', jokeController.deleteJoke);
}