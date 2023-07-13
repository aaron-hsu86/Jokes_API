const Joke = require('../models/joke.model')

module.exports = {
    hello : (req, res) => {
        res.json({ message: "Ready for some jokes?" });
    },

    allJokes: (req, res) => {
        Joke.find()
            .then(jokes=>{
                res.json(jokes)
            }).catch(err=>res.json(err))
    },

    oneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then(joke=>{
                res.json(joke)
            }).catch(err=>res.json(err))
    },

    randomJoke: (req, res) => {
        Joke.find()
            .then(jokes=>{
                let random = Math.floor(Math.random()*jokes.length);
                res.json(jokes[random])
            }).catch(err=>res.json(err))
    },

    newJoke: (req, res) => {
        Joke.create(req.body)
        .then(newjoke => {
            res.json(newjoke)
        }).catch(err=>res.json(err))
    },

    updateJoke:(req, res) => {
        Joke.findOneAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true} )
            .then(joke=>{
                res.json(joke)
            }).catch(err=>res.json(err))
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then(joke=>{
                res.json(joke)
            }).catch(err=>res.json(err))
    }
}